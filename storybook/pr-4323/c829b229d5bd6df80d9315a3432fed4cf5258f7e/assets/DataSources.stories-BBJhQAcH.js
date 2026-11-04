import{j as r}from"./iframe-DywpB1hE.js";import{O as b}from"./object-table-DSqGDhpz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C_V2bQsS.js";import{u as g}from"./useOsdkClient-BoCP8Ra0.js";import"./preload-helper-C9IGOhE9.js";import"./Table-BJyzRyQX.js";import"./index-DmgiNEb3.js";import"./Dialog-b8TWvGfl.js";import"./cross-aTqn6PnT.js";import"./svgIconContainer-BDFx6Zxn.js";import"./useBaseUiId-J99Ack0x.js";import"./InternalBackdrop-ilty_vzC.js";import"./composite-Cr11nkBG.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./index-CkWqHjdx.js";import"./useEventCallback-B0JvgrbD.js";import"./SkeletonBar-CYjAwPZM.js";import"./LoadingCell-Dn8kxFfT.js";import"./ColumnConfigDialog-DENzayAM.js";import"./DraggableList-DNGNwkdW.js";import"./search-DVZ7S7-1.js";import"./Input-DaT49KS2.js";import"./useControlled-vk6jUFHs.js";import"./Button-Ctxa2jTP.js";import"./small-cross-DEhP5KVo.js";import"./ActionButton-j4A3JxyA.js";import"./Checkbox-C9Fq3_-7.js";import"./useValueChanged-DBM24efT.js";import"./CollapsiblePanel-QB2yvwOj.js";import"./MultiColumnSortDialog-BV5JkRYB.js";import"./MenuTrigger-B8-0Pn4M.js";import"./CompositeItem-D-O0kvjn.js";import"./ToolbarRootContext-DhYqu86z.js";import"./getDisabledMountTransitionStyles-hoTdldX2.js";import"./getPseudoElementBounds-CTvhJMZP.js";import"./chevron-down-B3UYxdX4.js";import"./index-CiTdpWDW.js";import"./error-zG4ckKPW.js";import"./BaseCbacBanner-030hm0gk.js";import"./makeExternalStore-CFrW1DiS.js";import"./Tooltip-BR9BNp9s.js";import"./PopoverPopup-9xYxalag.js";import"./debounce-DRpUcqeI.js";import"./tick-dSuqEogv.js";import"./DropdownField-DhQOHxUk.js";import"./isEqual-CbNKEKf0.js";import"./withOsdkMetrics-BM9yLZRB.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
