import{j as r}from"./iframe-B6SlknkT.js";import{O as b}from"./object-table-BjD-a2rM.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-CbsWTRYk.js";import{u as g}from"./useOsdkClient-6tgWcBTt.js";import"./preload-helper-CiWAtvVo.js";import"./Table-D1uGyHuL.js";import"./index-Cisl_9Mo.js";import"./Dialog-Dht4GjUV.js";import"./cross-K0XOfymX.js";import"./svgIconContainer-DvLmNigv.js";import"./useBaseUiId-DtAmNbh5.js";import"./InternalBackdrop-Dl30yC1C.js";import"./composite-P-ykFSG-.js";import"./index-BBz1sS-n.js";import"./index-BMjONJHt.js";import"./index-DmFxeViZ.js";import"./useEventCallback-NaQY75BS.js";import"./SkeletonBar-Clgo9cjH.js";import"./LoadingCell-CKZuBc9l.js";import"./ColumnConfigDialog-CehpGE9s.js";import"./DraggableList-CwYB9JVt.js";import"./search-xv1rsfPw.js";import"./Input-CXXJHcyj.js";import"./useControlled-PYuq7DgD.js";import"./isEqual-DBNTDdfj.js";import"./isObject-BLnKbGOO.js";import"./Button-F8n7DYb6.js";import"./ActionButton-BodQova9.js";import"./Checkbox-BNp5VU1x.js";import"./useValueChanged-CkgIT0Kx.js";import"./CollapsiblePanel-OFVSuctg.js";import"./MultiColumnSortDialog-CSgNB2hu.js";import"./MenuTrigger-DyWGdBhT.js";import"./CompositeItem-TSZ5fJAo.js";import"./ToolbarRootContext-2IHK8Ctj.js";import"./getDisabledMountTransitionStyles-ZwLnaqle.js";import"./getPseudoElementBounds-Cm2_1p_1.js";import"./chevron-down-DxJyaq1h.js";import"./index-WO9aHBrQ.js";import"./error-Bv29R1uB.js";import"./BaseCbacBanner-DUtQdQpu.js";import"./makeExternalStore-JliLFxhM.js";import"./Tooltip-BlcQGzNj.js";import"./PopoverPopup-Kq1sgNl6.js";import"./toNumber-CjsjmZPP.js";import"./tick-_Aaq9I8S.js";import"./DropdownField-BUVA7rQ6.js";import"./withOsdkMetrics-YbnoeFLv.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
