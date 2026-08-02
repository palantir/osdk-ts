import{j as r}from"./iframe-BXc0SdYp.js";import{O as b}from"./object-table-BhzTiGy9.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CWFC4MQk.js";import{u as g}from"./useOsdkClient-DTGfF2y2.js";import"./preload-helper-Dgu0aCKG.js";import"./Table-CZWHMe3M.js";import"./index-sKZCAMiv.js";import"./Dialog-Ck0WBglk.js";import"./cross-DSir2KfQ.js";import"./svgIconContainer-CtLj_lp3.js";import"./useBaseUiId-DqkkvKBG.js";import"./InternalBackdrop-XSqFwaTZ.js";import"./composite-BosRxt1T.js";import"./index-xPUR9HDc.js";import"./index-ZxZ1oX-Q.js";import"./index-Di-4g85M.js";import"./useEventCallback-BcN2mBKQ.js";import"./SkeletonBar-CUoKdRIy.js";import"./LoadingCell-DYSZMW2B.js";import"./ColumnConfigDialog-9DzDzX-f.js";import"./DraggableList-CVCqRl1M.js";import"./search-B6X43A4Z.js";import"./Input-CtK5iVsJ.js";import"./useControlled-BTSH1hwb.js";import"./isEqual-DsVvH1U9.js";import"./isObject-D_-UmL4L.js";import"./Button-V6iaqNOS.js";import"./ActionButton-C0nK6W1Z.js";import"./Checkbox-DxDlHoRI.js";import"./useValueChanged-CD0gYTJj.js";import"./CollapsiblePanel-B_jfSm5a.js";import"./MultiColumnSortDialog-CMwlnq_C.js";import"./MenuTrigger-Du5jMpS0.js";import"./CompositeItem-Bes2HBqU.js";import"./ToolbarRootContext-rpzDDNOx.js";import"./getDisabledMountTransitionStyles-DUAj8f-a.js";import"./getPseudoElementBounds-Co5ODb-3.js";import"./chevron-down-B0Age7bb.js";import"./index-DBAAGxWp.js";import"./error-B7ytnZ8A.js";import"./BaseCbacBanner-v42XuZEM.js";import"./makeExternalStore-CVfYdLVr.js";import"./Tooltip-C3STotTB.js";import"./PopoverPopup-Bl2Ueh2Q.js";import"./toNumber-Dw0dQ5w4.js";import"./tick-C6Lgjx3i.js";import"./DropdownField-jmX2jAzW.js";import"./withOsdkMetrics-D6nw3VcK.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
