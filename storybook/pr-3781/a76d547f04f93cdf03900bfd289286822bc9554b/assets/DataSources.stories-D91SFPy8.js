import{j as r}from"./iframe-CF2n_SwP.js";import{O as b}from"./object-table-Ws3ignoy.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D95M5YkJ.js";import{u as g}from"./useOsdkClient-CjY8fwPh.js";import"./preload-helper-DpkaM50o.js";import"./Table-CBr66Lo7.js";import"./index-D2CBKEtq.js";import"./Dialog-DLnTIYpe.js";import"./cross-BHNzOWs1.js";import"./svgIconContainer-U4yJEvCA.js";import"./useBaseUiId-JH9EwjdR.js";import"./InternalBackdrop-CFqIHn15.js";import"./composite-DZIjbJPA.js";import"./index-BidtJzDD.js";import"./index-CgTL-8g-.js";import"./index-Cw8Yhhfu.js";import"./useEventCallback-5QX3oL2W.js";import"./SkeletonBar-cM1CrOuj.js";import"./LoadingCell-_kLrmdk5.js";import"./ColumnConfigDialog-Czn5LnnR.js";import"./DraggableList-0yBygflh.js";import"./search-Bdvx3ZDa.js";import"./Input-CGJrCa5R.js";import"./useControlled-DmmVigSV.js";import"./isEqual-CKx_5yvK.js";import"./isObject-DJupl0Bh.js";import"./Button-C3HVqe_G.js";import"./ActionButton-BH97OqGs.js";import"./Checkbox-D_I3fajL.js";import"./useValueChanged-sT6XHa_c.js";import"./CollapsiblePanel-yV7ZG1oY.js";import"./MultiColumnSortDialog-BBJiA0Gy.js";import"./MenuTrigger-Ck_tS7HF.js";import"./CompositeItem-WiSS-79O.js";import"./ToolbarRootContext-BMZZpRhf.js";import"./getDisabledMountTransitionStyles-Ch5qDZKW.js";import"./getPseudoElementBounds-vz9Xk0s1.js";import"./chevron-down-DX2JC5eM.js";import"./index-ExDoAjE3.js";import"./error-Dbf0LG0M.js";import"./BaseCbacBanner-DSQTVBGe.js";import"./makeExternalStore-CKv8i6Rr.js";import"./Tooltip-CHLCRTGv.js";import"./PopoverPopup-BOqiFA9Z.js";import"./toNumber-CWEJRA8Y.js";import"./tick-DTwY1UVD.js";import"./DropdownField-BVuM_ctV.js";import"./withOsdkMetrics-nsN9tDQx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
