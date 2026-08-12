import{j as r}from"./iframe-B4fcYJiT.js";import{O as b}from"./object-table-wmuurdSj.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DlJuVZcJ.js";import{u as g}from"./useOsdkClient-CLoYggTB.js";import"./preload-helper-5Xw9mBMZ.js";import"./Table-BjoSwt71.js";import"./index-vOfuVkgp.js";import"./Dialog-BuJv0oan.js";import"./cross-C_JdOVLy.js";import"./svgIconContainer-DPEA_BLS.js";import"./useBaseUiId-B6WbWpXC.js";import"./InternalBackdrop-htLWR8L5.js";import"./composite-B-tdErfc.js";import"./index-Bt4bJlhP.js";import"./index-CJQLe4j-.js";import"./index-BdBvEu1G.js";import"./useEventCallback-By0kDg3B.js";import"./SkeletonBar-AjIVRhjA.js";import"./LoadingCell-DsaPLpod.js";import"./ColumnConfigDialog-jQja5evH.js";import"./DraggableList-Dnmu7Nmy.js";import"./search-CIBP2gcU.js";import"./Input-DZvTEW1z.js";import"./useControlled-DX4yqe1s.js";import"./isEqual-gV3mdmfB.js";import"./isObject-DxsoYVwo.js";import"./Button-D_oMeqth.js";import"./ActionButton-DhWSTHtc.js";import"./Checkbox-nqjfnWv-.js";import"./useValueChanged-B7hRFktE.js";import"./CollapsiblePanel-80O_QsdD.js";import"./MultiColumnSortDialog-C8QjInzL.js";import"./MenuTrigger-CJ8cgNtT.js";import"./CompositeItem-pQ2K7xcn.js";import"./ToolbarRootContext-y8R4SKxQ.js";import"./getDisabledMountTransitionStyles-B03Bv83z.js";import"./getPseudoElementBounds-CDskDbCj.js";import"./chevron-down-D4_4ihME.js";import"./index-Rk3z2JLL.js";import"./error-BdWXxwFt.js";import"./BaseCbacBanner-D61PQQ1U.js";import"./makeExternalStore-DVTzYonn.js";import"./Tooltip-BTrbcxkb.js";import"./PopoverPopup-xSMzY-FR.js";import"./toNumber-Dh2Swo2H.js";import"./tick-C633aTdz.js";import"./DropdownField-C5BZ1RDL.js";import"./withOsdkMetrics-BoWW8iWH.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
