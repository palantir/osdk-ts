import{j as r}from"./iframe-BcrluB4l.js";import{O as b}from"./object-table-tTESQlTz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BPDrWOv8.js";import{u as g}from"./useOsdkClient-DxC0-1je.js";import"./preload-helper-CMptGl2f.js";import"./Table-CQ8twf8w.js";import"./index-BPHTN-Ic.js";import"./Dialog-CcGvCVRC.js";import"./cross-CbMBUGlC.js";import"./svgIconContainer-BPAup90b.js";import"./useBaseUiId-COen3SNx.js";import"./InternalBackdrop-DZmHnGde.js";import"./composite-BL4i_Dd_.js";import"./index-DB61AMZ9.js";import"./index-DyKMSrbe.js";import"./index-BMgCDSVG.js";import"./useEventCallback-C6fFqXyE.js";import"./SkeletonBar-C-Z5HyPu.js";import"./LoadingCell-BBP0iUNs.js";import"./ColumnConfigDialog-C2xrEK7a.js";import"./DraggableList-BQmBFo1I.js";import"./search-UY8sNtzX.js";import"./Input-BWZEIjN7.js";import"./useControlled-s5y_Kd6s.js";import"./isEqual-Ci9lQ3Gg.js";import"./isObject-CbCEqu8w.js";import"./Button-BOymE2P8.js";import"./ActionButton-BhEHpIgB.js";import"./Checkbox-BKgiMTYz.js";import"./useValueChanged-8Sy0KQDz.js";import"./CollapsiblePanel-CkSIzJJh.js";import"./MultiColumnSortDialog-D-Vn9-xU.js";import"./MenuTrigger-DXXXsFlp.js";import"./CompositeItem-BXCgv3jv.js";import"./ToolbarRootContext-D34lClUE.js";import"./getDisabledMountTransitionStyles-QP1QK2bF.js";import"./getPseudoElementBounds-46Ka_uq5.js";import"./chevron-down-DL5tAbBo.js";import"./index-B-I3Uh8K.js";import"./error-CycMySYi.js";import"./BaseCbacBanner-DHYvpBBq.js";import"./makeExternalStore-CLPl01nQ.js";import"./Tooltip-C5dKWTck.js";import"./PopoverPopup-D4SHdc0w.js";import"./toNumber-D4SbUGjd.js";import"./tick-BexnmMAh.js";import"./DropdownField-9vwLO1SK.js";import"./withOsdkMetrics-WV7mv1fL.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
