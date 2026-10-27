import{j as r}from"./iframe-DuF9ULT7.js";import{O as b}from"./object-table-BfPXsznY.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DCKRsIST.js";import{u as g}from"./useOsdkClient-BSXkMVIu.js";import"./preload-helper-kD_tsguj.js";import"./Table-Ck3oDQZz.js";import"./index-muXsy8in.js";import"./Dialog-C4PvVf4N.js";import"./cross-CWdW2uUC.js";import"./svgIconContainer-Cg0DvcJX.js";import"./useBaseUiId-toBz8Uh9.js";import"./InternalBackdrop-DAn5w1fs.js";import"./composite-B1SRd4gq.js";import"./index-CQs0rdO8.js";import"./index-DaCqd03Q.js";import"./index-D5Uc12e6.js";import"./useEventCallback-CNUkj118.js";import"./SkeletonBar-CgHloKeI.js";import"./LoadingCell-D_nqtry4.js";import"./ColumnConfigDialog-B_SLMB2N.js";import"./DraggableList-Bi7JcdoK.js";import"./search-BijdxR6R.js";import"./Input-Cz82mbXb.js";import"./useControlled-DjU5snnM.js";import"./Button-BZjuNt0h.js";import"./small-cross-DUrm4kRJ.js";import"./ActionButton-CX87U3oR.js";import"./Checkbox-Dai2y2mJ.js";import"./useValueChanged-Cn14tmvW.js";import"./CollapsiblePanel-DBem6MQm.js";import"./MultiColumnSortDialog-D2TaUp4Q.js";import"./MenuTrigger-l9somBBq.js";import"./CompositeItem-lLhT8JrE.js";import"./ToolbarRootContext-4pjZNXLZ.js";import"./getDisabledMountTransitionStyles-BJaQXL8u.js";import"./getPseudoElementBounds-BUh7K_dy.js";import"./chevron-down-CaPJ8T2H.js";import"./index-B-a6xU5p.js";import"./error-BLlGlY0w.js";import"./BaseCbacBanner-BrhvEN2m.js";import"./makeExternalStore-BjN8YBiO.js";import"./Tooltip-BNXMXQEy.js";import"./PopoverPopup-mneHcQVw.js";import"./debounce-CrZBwGro.js";import"./tick-D563aBAq.js";import"./DropdownField-BF8fdmfG.js";import"./isEqual-Bfv2CuL1.js";import"./withOsdkMetrics-BCYo5O_x.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
