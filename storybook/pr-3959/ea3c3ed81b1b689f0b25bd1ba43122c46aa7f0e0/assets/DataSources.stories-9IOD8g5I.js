import{j as r}from"./iframe-DkzbgSAD.js";import{O as b}from"./object-table-DERUT3qL.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-B_k8_2Lh.js";import{u as g}from"./useOsdkClient-BN4CbGuS.js";import"./preload-helper-BiwIe667.js";import"./Table-BjvAinYT.js";import"./index-DjIOOe4t.js";import"./Dialog-c7vLoh07.js";import"./cross-Cd4Ezf-o.js";import"./svgIconContainer-DSZ9Y-N3.js";import"./useBaseUiId-CdNYBUR5.js";import"./InternalBackdrop-CaeoLXWh.js";import"./composite-CynzhD0V.js";import"./index-CtmpuiHr.js";import"./index-DKOk24VN.js";import"./index-MiufCKVv.js";import"./useEventCallback-Dvazelct.js";import"./SkeletonBar-DLuntpKM.js";import"./LoadingCell-CP8OE6bF.js";import"./ColumnConfigDialog-BMcEiYrr.js";import"./DraggableList-YeaSyVSn.js";import"./search-DVRH7Lct.js";import"./Input-CAjIPIjE.js";import"./useControlled-C8Dvxw0_.js";import"./Button-BHYsrTUy.js";import"./small-cross-D9-XIEQD.js";import"./ActionButton-CX4x4__7.js";import"./Checkbox-DZ1dvYsR.js";import"./useValueChanged-DbcB2lMI.js";import"./CollapsiblePanel-lk9wXXL6.js";import"./MultiColumnSortDialog-t_1c5JLL.js";import"./MenuTrigger-DVn985mJ.js";import"./CompositeItem-B0TjqzOk.js";import"./ToolbarRootContext-Z-VSuc63.js";import"./getDisabledMountTransitionStyles-BKGL4WDU.js";import"./getPseudoElementBounds-CuBbtjn1.js";import"./chevron-down-D4koVRNt.js";import"./index-BSrr_0Jz.js";import"./error-CAfn1z7w.js";import"./BaseCbacBanner-DzF-LUX4.js";import"./makeExternalStore-CBYxH43f.js";import"./Tooltip-4k1X8Kbh.js";import"./PopoverPopup-jjunJ9hJ.js";import"./debounce-DuGr5rYC.js";import"./tick-BvW-N913.js";import"./DropdownField-mY-AIqk3.js";import"./isEqual-BiIWWaVa.js";import"./withOsdkMetrics-BhSP4CDN.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
