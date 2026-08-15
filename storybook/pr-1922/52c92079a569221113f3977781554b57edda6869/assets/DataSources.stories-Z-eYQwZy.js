import{j as r}from"./iframe-QDaBOsra.js";import{O as b}from"./object-table-BKqIvi-i.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D8BYOcCm.js";import{u as g}from"./useOsdkClient-BIlIYc3q.js";import"./preload-helper-jyefFMUr.js";import"./Table-CjizmD6_.js";import"./index-D2vpxCu8.js";import"./Dialog-NOed3MXB.js";import"./cross-iJjTw1OM.js";import"./svgIconContainer-CvV-2N9f.js";import"./useBaseUiId-DjqNfgzR.js";import"./InternalBackdrop-Dg-ePZWC.js";import"./composite-BAT7e_UE.js";import"./index-BlPi3lSf.js";import"./index-DKL8AmRe.js";import"./index-BqZA6QHe.js";import"./useEventCallback-BjGyJBWU.js";import"./SkeletonBar-fZmLCcbb.js";import"./LoadingCell-BZuObAeC.js";import"./ColumnConfigDialog-BggjWMt9.js";import"./DraggableList-y-d7ko1t.js";import"./search-kqukl_jl.js";import"./Input-rRK-xJ54.js";import"./useControlled-FhAUZFAL.js";import"./Button-DkAvArvY.js";import"./small-cross--x_z2UwR.js";import"./ActionButton-DqO5e5ax.js";import"./Checkbox-DyooxNyF.js";import"./useValueChanged-CssPl65C.js";import"./CollapsiblePanel-DdjBa-EN.js";import"./MultiColumnSortDialog-BzWsNy6c.js";import"./MenuTrigger-Bwpm1z4T.js";import"./CompositeItem-BZpx2jPT.js";import"./ToolbarRootContext-C6_BvipF.js";import"./getDisabledMountTransitionStyles-BexZtf_H.js";import"./getPseudoElementBounds-DkaQLMrl.js";import"./chevron-down-B1cL2irb.js";import"./index-BpZcid6-.js";import"./error-DIA5xUfH.js";import"./BaseCbacBanner-DrXTtVeG.js";import"./makeExternalStore-CTZ1pZcF.js";import"./Tooltip-BC3kcowS.js";import"./PopoverPopup-CVJvgmsF.js";import"./debounce-DCZQrZ2_.js";import"./tick-Dp13d1sN.js";import"./DropdownField-LTytfUX6.js";import"./isEqual-CmM27koz.js";import"./withOsdkMetrics-CaEkt7Mu.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
