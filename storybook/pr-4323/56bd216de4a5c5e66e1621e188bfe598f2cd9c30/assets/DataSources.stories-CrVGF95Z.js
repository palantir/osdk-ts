import{j as r}from"./iframe-xO7-cFQE.js";import{O as b}from"./object-table-DPPomAoY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CyXuExSv.js";import{u as g}from"./useOsdkClient-CDqxUxHE.js";import"./preload-helper-CjE4C0sP.js";import"./Table-DkXla0eu.js";import"./index-BOQrkF-F.js";import"./Dialog-C8Or7tBX.js";import"./cross-D5U-IDeN.js";import"./svgIconContainer-Bxzx9KVi.js";import"./useBaseUiId-DvKVHufz.js";import"./InternalBackdrop-C9ZmsvjR.js";import"./composite-CWWmbaS7.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./index-1a1U9ieG.js";import"./useEventCallback-fopAPD8Y.js";import"./SkeletonBar-f3m0sjLr.js";import"./LoadingCell-0MQBRXiw.js";import"./ColumnConfigDialog-CKmlFPhZ.js";import"./DraggableList-D_G4MIOq.js";import"./search-Bazo2FVF.js";import"./Input-99mwA4VF.js";import"./useControlled-Wgq9Q75K.js";import"./Button-BCHzki1U.js";import"./small-cross-BYaqaz9R.js";import"./ActionButton-DJcroEAc.js";import"./Checkbox-B89KfeZF.js";import"./useValueChanged-Dgs0e82c.js";import"./CollapsiblePanel-CGLiej8s.js";import"./MultiColumnSortDialog-wtHUP_vi.js";import"./MenuTrigger-u1xB01Kq.js";import"./CompositeItem-BPvfL8qH.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./getDisabledMountTransitionStyles-aVxKVFQR.js";import"./getPseudoElementBounds-C2y6c8Y1.js";import"./chevron-down-hptZ4LWp.js";import"./index-DDxyKWUj.js";import"./error-n609TGyv.js";import"./BaseCbacBanner-cN_njO3E.js";import"./makeExternalStore-Czx_Amad.js";import"./Tooltip-DPJAxssW.js";import"./PopoverPopup-hp660gJk.js";import"./debounce-GWee0BQR.js";import"./tick-C49IxArq.js";import"./DropdownField-ScPov9Rd.js";import"./isEqual-DQYCwzyu.js";import"./withOsdkMetrics-BDGk6jsR.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
