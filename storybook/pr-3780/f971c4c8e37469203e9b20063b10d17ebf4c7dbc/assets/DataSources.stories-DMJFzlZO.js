import{j as r}from"./iframe-DNFazLRo.js";import{O as b}from"./object-table-AP66W_DC.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-OfkFij7f.js";import{u as g}from"./useOsdkClient-DQMaEH14.js";import"./preload-helper-CSOKbrIj.js";import"./Table-BxtcZ7E1.js";import"./index-D8TskzeX.js";import"./Dialog-DGcnm95O.js";import"./cross-BIdaAy0r.js";import"./svgIconContainer-D3tpgr1_.js";import"./useBaseUiId-Bk1k55aA.js";import"./InternalBackdrop-DnZfkcan.js";import"./composite-SJWY6A2_.js";import"./index-Bwgkh0sx.js";import"./index-DGsBqEMa.js";import"./index-BUi3Bw9s.js";import"./useEventCallback-CXlnvJZE.js";import"./SkeletonBar-k7Kbv1T8.js";import"./LoadingCell-CF0Hy73G.js";import"./ColumnConfigDialog-sleq7Oeb.js";import"./DraggableList-CITdqsb5.js";import"./search-DafmKbOj.js";import"./Input-Bvkv7SHA.js";import"./useControlled-DqGw_9SJ.js";import"./isEqual-BUIYXWqW.js";import"./isObject-BWn2f4Ek.js";import"./Button-Dx6KadTF.js";import"./ActionButton-pxPx36n-.js";import"./Checkbox-CE6K5_Vj.js";import"./useValueChanged-BJKCNwE7.js";import"./CollapsiblePanel-DBAyJYmf.js";import"./MultiColumnSortDialog-DSv0ZuKM.js";import"./MenuTrigger-ChBkGuXs.js";import"./CompositeItem-f4mP3DUQ.js";import"./ToolbarRootContext-DiLS0IHp.js";import"./getDisabledMountTransitionStyles-D68KY3fK.js";import"./getPseudoElementBounds-B85mJiJQ.js";import"./chevron-down-SokcOk50.js";import"./index-VHSNuB9X.js";import"./error-B_y1x8OC.js";import"./BaseCbacBanner-BhQdxXZj.js";import"./makeExternalStore-Cya9wI0B.js";import"./Tooltip-bF5Tbs8Y.js";import"./PopoverPopup-CMyzTC-L.js";import"./toNumber-BEehHCJx.js";import"./tick-CEHYeeOo.js";import"./DropdownField-CUXNOqAA.js";import"./withOsdkMetrics-Rac-iTvD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
