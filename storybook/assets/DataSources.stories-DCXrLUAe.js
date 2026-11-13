import{j as r}from"./iframe-ByGxztuR.js";import{O as b}from"./object-table-DZyoOWLx.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Bh6jhzg_.js";import{u as g}from"./useOsdkClient-CVOauZ1U.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DqetcjwK.js";import"./index-C_NmzukE.js";import"./Dialog-B7Nbacy1.js";import"./cross-EOhwFFJB.js";import"./svgIconContainer-GMqm2qsj.js";import"./useBaseUiId-CwX2o4Wt.js";import"./InternalBackdrop-DgqbQRDj.js";import"./composite-DJoo4D6V.js";import"./index-YFgfuOe9.js";import"./index-Das4h1Wa.js";import"./index-CkNTyrKZ.js";import"./useEventCallback-jNWNQjbn.js";import"./SkeletonBar-D-CJ2Xd8.js";import"./LoadingCell-sPBSsQMc.js";import"./ColumnConfigDialog--2P7KNXB.js";import"./DraggableList-CA2K9bf_.js";import"./search-CzmiRz1J.js";import"./Input-CuOC6fkL.js";import"./useControlled-BeV8RDqE.js";import"./Button-BOr-KM70.js";import"./small-cross-BEW2vdRK.js";import"./ActionButton-BlTtKw0A.js";import"./Checkbox-DBVoCxJX.js";import"./useValueChanged-Z8Bv9K84.js";import"./CollapsiblePanel-DhK36AQZ.js";import"./MultiColumnSortDialog-DhbVIDQv.js";import"./MenuTrigger-DLhrvdAe.js";import"./CompositeItem-CzWKxF8z.js";import"./ToolbarRootContext-CvTQ741x.js";import"./getDisabledMountTransitionStyles-C7v_y2WO.js";import"./getPseudoElementBounds-TA-1Gcka.js";import"./chevron-down-Bod3Eu0k.js";import"./index-Bv7C6Zcf.js";import"./error-DHSjI_y4.js";import"./BaseCbacBanner-D1Lz2cp9.js";import"./makeExternalStore-BO8GdXCg.js";import"./Tooltip-DIrk5jKg.js";import"./PopoverPopup-CaNVB3SN.js";import"./Select-CvqHSLxV.js";import"./tick-BQpeUazS.js";import"./DropdownField-Ce4MJtTK.js";import"./useDebouncedCallback-CiTG6wRJ.js";import"./isEqual-DF2C28I7.js";import"./_baseIsEqual-Ck41N75x.js";import"./stableSerialize-BgLLW9e2.js";import"./withOsdkMetrics-CzSXt9I1.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,ge={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const ue=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,ue as __namedExportsOrder,ge as default};
