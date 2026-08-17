import{j as r}from"./iframe-DVwkDS8L.js";import{O as b}from"./object-table-CW5ks6O5.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-C-n-d1Kj.js";import{u as g}from"./useOsdkClient-Bu2ys2gj.js";import"./preload-helper-CuM_C8uX.js";import"./Table-DMznMLZl.js";import"./index-B2DFp03X.js";import"./Dialog-i0MtrM66.js";import"./cross-COGhdLyT.js";import"./svgIconContainer-r5K4UgUA.js";import"./useBaseUiId-D7rE6SNe.js";import"./InternalBackdrop-BuWd3sOl.js";import"./composite-CNYsr7GG.js";import"./index-Bb7J_5Af.js";import"./index-Bh-tKDNJ.js";import"./index-C1CmYkA8.js";import"./useEventCallback-DGx2TQYW.js";import"./SkeletonBar-CqsYBrqh.js";import"./LoadingCell-Cl1hyvVa.js";import"./ColumnConfigDialog-DJh4qSym.js";import"./DraggableList-BvwpLn0D.js";import"./search-CaKxRlqq.js";import"./Input-BqPh0cED.js";import"./useControlled-CIDtoIkt.js";import"./Button-BqtiPfOB.js";import"./small-cross-BSPO3y5H.js";import"./ActionButton-BFQ96y8Q.js";import"./Checkbox-CALf-FUx.js";import"./useValueChanged-CR7gMkQc.js";import"./CollapsiblePanel-CnIQhtcV.js";import"./MultiColumnSortDialog-ChJwlnLI.js";import"./MenuTrigger-DWOC39EQ.js";import"./CompositeItem-oNLn9P67.js";import"./ToolbarRootContext-s0DCpxFM.js";import"./getDisabledMountTransitionStyles-a8KtX7wR.js";import"./getPseudoElementBounds-DfG2bGtj.js";import"./chevron-down-9KBxjP_q.js";import"./index-BuNntoD4.js";import"./error-D_Hj0Ztb.js";import"./BaseCbacBanner-at1GySGa.js";import"./makeExternalStore-DelJbyGr.js";import"./Tooltip-TE59fFno.js";import"./PopoverPopup-Bylv3mxH.js";import"./debounce-C4IZ_bH8.js";import"./tick-LEloDUPv.js";import"./DropdownField-CCMXdF1T.js";import"./isEqual-DTWh5T8b.js";import"./withOsdkMetrics-D89qfQxD.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
