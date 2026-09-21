import{j as r}from"./iframe-BOj5ppke.js";import{O as b}from"./object-table-CMpHVwNW.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BIuwEZXu.js";import{u as g}from"./useOsdkClient-n_KwCS3w.js";import"./preload-helper-CBHct16F.js";import"./Table-XbqFUHS7.js";import"./index-HKvlrTBa.js";import"./Dialog-9inVe_LB.js";import"./cross-DNHN82gf.js";import"./svgIconContainer-BuTDWv6N.js";import"./useBaseUiId-BNy53Xwg.js";import"./InternalBackdrop-2JUdJu3v.js";import"./composite-BIYhI5rN.js";import"./index-yY_I17Ls.js";import"./index-D09ehKI5.js";import"./index-60fYJKFG.js";import"./useEventCallback-6T1KNzx1.js";import"./SkeletonBar-B-IOK4wU.js";import"./LoadingCell-CGBveAsm.js";import"./ColumnConfigDialog-BOLFm22z.js";import"./DraggableList-CuWl0rg1.js";import"./search-Df27sRIb.js";import"./Input-D8jSSVKT.js";import"./useControlled-7cY7BcCI.js";import"./Button-KVqGzs9n.js";import"./small-cross-Bg4ILemt.js";import"./ActionButton-BOz9rn69.js";import"./Checkbox-CpJwtUU1.js";import"./useValueChanged-1Gqn7W9E.js";import"./CollapsiblePanel-C2WGctBy.js";import"./MultiColumnSortDialog-D-kndlzk.js";import"./MenuTrigger-B8jkOBbS.js";import"./CompositeItem-DOYu6l81.js";import"./ToolbarRootContext-BwQvbarU.js";import"./getDisabledMountTransitionStyles-BPfNVA-k.js";import"./getPseudoElementBounds-BnmQ9bfG.js";import"./chevron-down-CNYfkkhw.js";import"./index-CZ8HqYif.js";import"./error-DVmdWFmh.js";import"./BaseCbacBanner-DEawCAhX.js";import"./makeExternalStore-EqBWCSWE.js";import"./Tooltip-DoFeRf33.js";import"./PopoverPopup-DVsaBUbG.js";import"./debounce-DoyNhnA7.js";import"./tick-ZiYqSkEH.js";import"./DropdownField-D4MnIHgF.js";import"./isEqual-CLTE0z_7.js";import"./withOsdkMetrics-RevSluC0.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
