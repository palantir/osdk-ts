import{j as r}from"./iframe-DljkNNxK.js";import{O as b}from"./object-table-BRthzJfl.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-A-Q4_w5X.js";import{u as g}from"./useOsdkClient-BkCV2xv_.js";import"./preload-helper-Cpo1q_i6.js";import"./Table-By3tnqQM.js";import"./index-D64RJmhP.js";import"./Dialog-DBv0k4xP.js";import"./cross-BC6Bgo8V.js";import"./svgIconContainer-CnhwGfa6.js";import"./useBaseUiId-BDewQ6nf.js";import"./InternalBackdrop-Bvu56fjL.js";import"./composite-GUx361Ly.js";import"./index-BwvPIv6E.js";import"./index-DVoFeU9w.js";import"./index-Bwjaz__m.js";import"./useEventCallback-kYW6J0ZS.js";import"./SkeletonBar-C5t-2Ut2.js";import"./LoadingCell-BC3NZk02.js";import"./ColumnConfigDialog-Ctnm6Zhp.js";import"./DraggableList-DgptIJm8.js";import"./search-CviN7Quw.js";import"./Input-C1T-Uord.js";import"./useControlled-Chg_haxJ.js";import"./Button-sFRd8YxN.js";import"./small-cross-uYb4a6-f.js";import"./ActionButton-WkEm3I4L.js";import"./Checkbox-D0824Hq2.js";import"./useValueChanged-DZsMbhXQ.js";import"./CollapsiblePanel-DYjSn6NE.js";import"./MultiColumnSortDialog-DDc1iF_d.js";import"./MenuTrigger-5WPZqihD.js";import"./CompositeItem-asw0sP3K.js";import"./ToolbarRootContext-DT3K0tIr.js";import"./getDisabledMountTransitionStyles-ClRtvzpg.js";import"./getPseudoElementBounds-0bgPiDkB.js";import"./chevron-down-TeUlP9Ri.js";import"./index-IcPHFoqD.js";import"./error-M6Q45Sy0.js";import"./BaseCbacBanner-BFqmynFx.js";import"./makeExternalStore-CQCn-_eJ.js";import"./Tooltip-DDI1N6qC.js";import"./PopoverPopup-ABlhCtw7.js";import"./debounce-v1jWqcH4.js";import"./tick-BHidfImn.js";import"./DropdownField-BJcI8ciq.js";import"./isEqual-DZhrb1Kx.js";import"./withOsdkMetrics-DgcAshrM.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
