import{j as r}from"./iframe-DlJcn1ee.js";import{O as b}from"./object-table-Q-9wcvLB.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DIAT44JW.js";import{u as g}from"./useOsdkClient-C5xFnNI3.js";import"./preload-helper-BLYSAxZc.js";import"./Table-BVEuulSw.js";import"./index-CkQyG9JZ.js";import"./Dialog-DZ9ANgfT.js";import"./cross-BZzn8J7n.js";import"./svgIconContainer-5ONNfYAu.js";import"./useBaseUiId-CXPuJlvy.js";import"./InternalBackdrop-CMl_3iou.js";import"./composite-zLUhUg_C.js";import"./index-Ci_TDln9.js";import"./index-B8NVU8EY.js";import"./index-CRFa_Oji.js";import"./useEventCallback-BzYAIX-O.js";import"./SkeletonBar-D8i5j12o.js";import"./LoadingCell-B23hYJP7.js";import"./ColumnConfigDialog-B_NNuY9i.js";import"./DraggableList-CW2VwWDS.js";import"./search-Dfke7UKE.js";import"./Input-DpCgc88D.js";import"./useControlled-BS4JJ_gb.js";import"./isEqual-Dj5XWcTF.js";import"./isObject-lc_azX1V.js";import"./Button-BcjZpSmY.js";import"./ActionButton-CyRVfIaS.js";import"./Checkbox-_y4thMap.js";import"./useValueChanged-B-sxgZ-V.js";import"./CollapsiblePanel-DR2SXRzl.js";import"./MultiColumnSortDialog-CBn8vDWw.js";import"./MenuTrigger-BmtLNfQI.js";import"./CompositeItem-o1wZxKIg.js";import"./ToolbarRootContext-BPqNmhML.js";import"./getDisabledMountTransitionStyles-BShYQ_ND.js";import"./getPseudoElementBounds-B_9H0YsL.js";import"./chevron-down-DPOW8KDp.js";import"./index-BzFfhsxG.js";import"./error-CS0Z81pt.js";import"./BaseCbacBanner-B88gwSPJ.js";import"./makeExternalStore-DRpXALfh.js";import"./Tooltip-C1fCKEvH.js";import"./PopoverPopup-CUht9G04.js";import"./toNumber-dJIfe93O.js";import"./tick-JBy8ffy-.js";import"./DropdownField-BtUFSNhq.js";import"./withOsdkMetrics-a2bLSbfF.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
