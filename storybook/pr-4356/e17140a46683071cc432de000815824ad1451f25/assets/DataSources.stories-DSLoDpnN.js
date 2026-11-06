import{j as r}from"./iframe-wBrbDET_.js";import{O as b}from"./object-table-l-msv8K7.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CE9QQVYF.js";import{u as g}from"./useOsdkClient-b3KRZKG8.js";import"./preload-helper-DyV1jABv.js";import"./Table-CKmvMShT.js";import"./index-Ncx2k3s4.js";import"./Dialog-AssY6Vhe.js";import"./cross-Df39fOvA.js";import"./svgIconContainer-Ct8cN05_.js";import"./useBaseUiId-eK3I3qsA.js";import"./InternalBackdrop-DejoUS48.js";import"./composite-SIfyViZe.js";import"./index-CHgCkFBn.js";import"./index-CmelBQvM.js";import"./index-D0qJZt22.js";import"./useEventCallback-CqTheTWA.js";import"./SkeletonBar-DyKvxgvp.js";import"./LoadingCell-Astirh1i.js";import"./ColumnConfigDialog-CmwFbY1V.js";import"./DraggableList-DQXh0Mtt.js";import"./search-CoFWb8gE.js";import"./Input-DFbvIuq-.js";import"./useControlled-2_Rn_F3e.js";import"./Button-DtJK54aF.js";import"./small-cross-Dckp6UXX.js";import"./ActionButton-DFvb9baL.js";import"./Checkbox-DSytaUdj.js";import"./useValueChanged-FeK06T4Y.js";import"./CollapsiblePanel-C3k19iJ9.js";import"./MultiColumnSortDialog-DcXb52ih.js";import"./MenuTrigger-D1Zl5Oyi.js";import"./CompositeItem-BNWpWAX_.js";import"./ToolbarRootContext-BxvlpQpy.js";import"./getDisabledMountTransitionStyles-tFuKCJy7.js";import"./getPseudoElementBounds-DXS1RVbT.js";import"./chevron-down-Dz6vupYI.js";import"./index-_TwhdO3w.js";import"./error-lMxpxIBb.js";import"./BaseCbacBanner-DAoL7TRO.js";import"./makeExternalStore-gYwFGl5I.js";import"./Tooltip-sYOln3gS.js";import"./PopoverPopup-B9ZQX_rh.js";import"./debounce-WlMj0UwE.js";import"./tick-DBtGJBOW.js";import"./DropdownField-zauvOy2L.js";import"./isEqual-DHHl8BCh.js";import"./withOsdkMetrics-mhV8EPst.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
