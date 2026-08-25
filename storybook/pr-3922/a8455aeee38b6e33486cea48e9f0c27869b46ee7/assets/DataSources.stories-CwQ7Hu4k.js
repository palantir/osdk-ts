import{j as r}from"./iframe-CSel4t1W.js";import{O as b}from"./object-table-BpmVsFZU.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B0is5FgP.js";import{u as g}from"./useOsdkClient-Dj6M6d9F.js";import"./preload-helper-DeRLNq8K.js";import"./Table-CKnMo4X1.js";import"./index-VOBk3ad_.js";import"./Dialog-ClnNjxqL.js";import"./cross-DPetmLAe.js";import"./svgIconContainer-i8GFflPC.js";import"./useBaseUiId-D0496slr.js";import"./InternalBackdrop-BYisvq6i.js";import"./composite-Byzj7O17.js";import"./index-DeXJQAWa.js";import"./index--NqLpmCo.js";import"./index-BV5Cdoe7.js";import"./useEventCallback-DqKcK-vR.js";import"./SkeletonBar-BfqGkaOo.js";import"./LoadingCell--tt_u-sG.js";import"./ColumnConfigDialog-ChsJWmLY.js";import"./DraggableList-DZKIG4MP.js";import"./search-BwGGgMMr.js";import"./Input-DGTrvJuV.js";import"./useControlled-7Z_CrWcG.js";import"./Button-B0bJWnZB.js";import"./small-cross-CV_RxsQI.js";import"./ActionButton-DjrfVe6W.js";import"./Checkbox-Df_kkF2C.js";import"./useValueChanged-wwbLd3Ma.js";import"./CollapsiblePanel-BVTCVGUH.js";import"./MultiColumnSortDialog-HNxeuU0j.js";import"./MenuTrigger-CoXfZTuu.js";import"./CompositeItem-DNegNKGA.js";import"./ToolbarRootContext-CEF5Xnn_.js";import"./getDisabledMountTransitionStyles-BsKiYSYB.js";import"./getPseudoElementBounds-DPjB8idw.js";import"./chevron-down-cgZkYG2x.js";import"./index-BoKtPRc2.js";import"./error-zHB_ZVMZ.js";import"./BaseCbacBanner-C9jY6EAK.js";import"./makeExternalStore-DsAD24Tw.js";import"./Tooltip-D7w10onw.js";import"./PopoverPopup-BrgHtowj.js";import"./debounce-BABMYm_Y.js";import"./tick-ChdjX_bW.js";import"./DropdownField-CxMOL9ui.js";import"./isEqual-DbA57Rmi.js";import"./withOsdkMetrics-BkUfyHr_.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
