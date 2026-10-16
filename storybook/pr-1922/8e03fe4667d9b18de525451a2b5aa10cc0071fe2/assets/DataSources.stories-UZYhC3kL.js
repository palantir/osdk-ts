import{j as r}from"./iframe-CX9YXgSA.js";import{O as b}from"./object-table-Dfe_mZa3.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BysoyG-b.js";import{u as g}from"./useOsdkClient-DpMK-LnF.js";import"./preload-helper-DtqkPlr3.js";import"./Table-DbkXRP8Q.js";import"./index-CHu8oj4z.js";import"./Dialog-AtSf_t3F.js";import"./cross-RF9BS1x-.js";import"./svgIconContainer-B6cy_VMV.js";import"./useBaseUiId-CCOn5SM4.js";import"./InternalBackdrop-BepV41uE.js";import"./composite-Buss17U8.js";import"./index-I5XF2J3w.js";import"./index-CU1lbmk7.js";import"./index-DqtGTCxT.js";import"./useEventCallback-foM6gK6J.js";import"./SkeletonBar-O2sp2JAt.js";import"./LoadingCell-BuGHfb6w.js";import"./ColumnConfigDialog-zhw3nOoj.js";import"./DraggableList-DjqACkCb.js";import"./search-N9rV3LuD.js";import"./Input-Cz4ERfsw.js";import"./useControlled-DmxCQxaW.js";import"./Button-CXKnl_XI.js";import"./small-cross-B9xThdJa.js";import"./ActionButton-DE-sYlp6.js";import"./Checkbox-CElMUeCU.js";import"./useValueChanged-BlgjX7r-.js";import"./CollapsiblePanel-BNaRB7Gp.js";import"./MultiColumnSortDialog-Bn1UaEGz.js";import"./MenuTrigger-C3Fnwbf1.js";import"./CompositeItem-4eZutR_U.js";import"./ToolbarRootContext-oh9KPlPl.js";import"./getDisabledMountTransitionStyles-CaxJBU-f.js";import"./getPseudoElementBounds-tIu6DOku.js";import"./chevron-down-Dc86wWzz.js";import"./index-DLNO2YQ4.js";import"./error-D_HPKerG.js";import"./BaseCbacBanner-j0epf_D2.js";import"./makeExternalStore-BTzOXgaO.js";import"./Tooltip-BxJhAj2y.js";import"./PopoverPopup-CV-lyuv2.js";import"./debounce-jRrecCNv.js";import"./tick-DKFgC3oF.js";import"./DropdownField-94zOpfvL.js";import"./isEqual-CEsABR2S.js";import"./withOsdkMetrics-DLY6T-R6.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
