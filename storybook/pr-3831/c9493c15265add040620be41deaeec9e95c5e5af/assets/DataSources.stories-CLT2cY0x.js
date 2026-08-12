import{j as r}from"./iframe-Bb7nZlGl.js";import{O as b}from"./object-table-CtZBle9Q.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C9PwUjv7.js";import{u as g}from"./useOsdkClient-3ofSw2lH.js";import"./preload-helper-5_2IOymj.js";import"./Table-DFA53aoo.js";import"./index-Ds72fwLq.js";import"./Dialog-jQw37vHq.js";import"./cross-BbGuk08-.js";import"./svgIconContainer-vUElkusf.js";import"./useBaseUiId-gkexnSBj.js";import"./InternalBackdrop-63ir8mIJ.js";import"./composite-B2CTevqe.js";import"./index-COCL-ZTE.js";import"./index-Dfd0f2n1.js";import"./index-BXoUKmrd.js";import"./useEventCallback-B0zZllci.js";import"./SkeletonBar-BGXWiCiL.js";import"./LoadingCell-D762gnJ2.js";import"./ColumnConfigDialog-D2jmUrOi.js";import"./DraggableList-Dw-BX5gx.js";import"./search-bXEtlzR1.js";import"./Input-xAYKVEpU.js";import"./useControlled-DB1jFnZJ.js";import"./isEqual-BTjZRe2t.js";import"./isObject-CQ3JilxR.js";import"./Button-B4bVBPgy.js";import"./ActionButton-Djhe9b2b.js";import"./Checkbox-CEZKgJYE.js";import"./useValueChanged-DnvzeC25.js";import"./CollapsiblePanel-8fEP_8qz.js";import"./MultiColumnSortDialog-BJeN8pFT.js";import"./MenuTrigger-BKRSjLYB.js";import"./CompositeItem-C4TcP1sN.js";import"./ToolbarRootContext-C-Jy6dbc.js";import"./getDisabledMountTransitionStyles-BW80yZdJ.js";import"./getPseudoElementBounds-SnXk6ZE7.js";import"./chevron-down-5D_xsBS1.js";import"./index-DcZR_HTv.js";import"./error-lsghjmGP.js";import"./BaseCbacBanner-dz77SKbE.js";import"./makeExternalStore-Dp2HdhKw.js";import"./Tooltip-nWI-M1JB.js";import"./PopoverPopup-DwjVgw15.js";import"./toNumber-qhHK68iw.js";import"./tick-BpKOiJSQ.js";import"./DropdownField-D29BtsXj.js";import"./withOsdkMetrics-DRtLXghB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
