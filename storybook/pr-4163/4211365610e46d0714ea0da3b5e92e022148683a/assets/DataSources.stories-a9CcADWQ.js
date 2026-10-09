import{j as r}from"./iframe-DKjGRkFv.js";import{O as b}from"./object-table-P6HhlI8x.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-eAnp9EAI.js";import{u as g}from"./useOsdkClient-BBbCJZXc.js";import"./preload-helper-C6rqf7Sg.js";import"./Table-BZ_fhjEt.js";import"./index-_KqllXCA.js";import"./Dialog-BUWkJvJD.js";import"./cross-Byw5v4Q_.js";import"./svgIconContainer-D-LkokGt.js";import"./useBaseUiId-jPX4s7al.js";import"./InternalBackdrop-BxtymM3X.js";import"./composite-Be6SAy6p.js";import"./index-BP_2hfUi.js";import"./index-Bcv2oXK6.js";import"./index-CQPVNm9V.js";import"./useEventCallback-BdnTh0Kq.js";import"./SkeletonBar-Eqz4moCH.js";import"./LoadingCell-CMdJ_9OA.js";import"./ColumnConfigDialog-z-zlKVrA.js";import"./DraggableList-DkY7Kz_a.js";import"./search-CvJrksrv.js";import"./Input-Cl-jE7Eu.js";import"./useControlled-BvxP1vnA.js";import"./Button-CT84oTMh.js";import"./small-cross-Cxklwva_.js";import"./ActionButton-DAdOrkYi.js";import"./Checkbox-DQBk6DW9.js";import"./useValueChanged-HwxNHl9M.js";import"./CollapsiblePanel-DC1OaWK6.js";import"./MultiColumnSortDialog-D9-ihbRr.js";import"./MenuTrigger-Dbm1l1kq.js";import"./CompositeItem-CdsaUFys.js";import"./ToolbarRootContext-VDTGiuqQ.js";import"./getDisabledMountTransitionStyles-DRdQhkzq.js";import"./getPseudoElementBounds-DHlxXCHC.js";import"./chevron-down-zDaWrCdE.js";import"./index-CVidFmw5.js";import"./error-CIT7Z9G8.js";import"./BaseCbacBanner-Bx7lFHvv.js";import"./makeExternalStore-BnEyfyYD.js";import"./Tooltip-KIWE0Mve.js";import"./PopoverPopup--8y4HuFf.js";import"./debounce-BuHDhe6S.js";import"./tick-jLPbNGml.js";import"./DropdownField-BHrdVt_T.js";import"./isEqual-Bo497v3Z.js";import"./withOsdkMetrics-e_OoMjHx.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
