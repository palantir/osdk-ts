import{j as r}from"./iframe-Cp41aqP7.js";import{O as b}from"./object-table-BcZ9MPkz.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BZFkYVrk.js";import{u as g}from"./useOsdkClient-DzbGNXpA.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CKuEzbDa.js";import"./index-D0Tljy_b.js";import"./Dialog-iCGALKlw.js";import"./cross-Cbaea3iY.js";import"./svgIconContainer-DVVwszt5.js";import"./useBaseUiId-BVY_Ln8A.js";import"./InternalBackdrop-D515swvl.js";import"./composite-BsDaV1nn.js";import"./index-Dz9kJjLp.js";import"./index-BlcK1Y7H.js";import"./index-BdZhYyGK.js";import"./useEventCallback-DYvwbLkT.js";import"./SkeletonBar-Cv35Aff5.js";import"./LoadingCell-JLc5WJsI.js";import"./ColumnConfigDialog-DDXQ-bRC.js";import"./DraggableList-CUcMak9q.js";import"./search-DHgRsLWA.js";import"./Input-DOfJ9Smz.js";import"./useControlled-BMwYrgu0.js";import"./isEqual-9eKCG8lp.js";import"./isObject-PCeiLxkN.js";import"./Button-C-PrS_MA.js";import"./ActionButton-iDYjuM9T.js";import"./Checkbox-CQD_wAeN.js";import"./useValueChanged-DZwKs37h.js";import"./CollapsiblePanel-DaDqnvsn.js";import"./MultiColumnSortDialog-7r8ph8n9.js";import"./MenuTrigger-DTJFhZYP.js";import"./CompositeItem-DMNMCzbX.js";import"./ToolbarRootContext-glPgGB04.js";import"./getDisabledMountTransitionStyles-DL60Rntb.js";import"./getPseudoElementBounds-D5wcKlQ4.js";import"./chevron-down-BfKEa5Yk.js";import"./index-DfsF6fb0.js";import"./error-Do9MFOLD.js";import"./BaseCbacBanner-DMgWQPMh.js";import"./makeExternalStore-BUN0j2Qi.js";import"./Tooltip-hJT400YE.js";import"./PopoverPopup-DkUx5hSV.js";import"./toNumber-C9KlVl61.js";import"./tick-UqTH4Lh6.js";import"./DropdownField-D1Wn4cZN.js";import"./withOsdkMetrics-BeNDlcLW.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
