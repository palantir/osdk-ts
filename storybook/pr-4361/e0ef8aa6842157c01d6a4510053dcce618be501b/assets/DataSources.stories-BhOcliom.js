import{j as r}from"./iframe-CQjpYJVQ.js";import{O as b}from"./object-table-BmToVaRO.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dd-e3WHX.js";import{u as g}from"./useOsdkClient-DD-lOblu.js";import"./preload-helper-5bhpmr97.js";import"./Table-DJBSUaTM.js";import"./index-zd6HXz9_.js";import"./Dialog-CM4XLviM.js";import"./cross-Deh5uDpB.js";import"./svgIconContainer-CE1ZQVk8.js";import"./useBaseUiId-jFZ68_bH.js";import"./InternalBackdrop-CTLp_BJs.js";import"./composite-D-zcsHj1.js";import"./index-CULyv4a8.js";import"./index-plWBun5g.js";import"./index-DSMMhLR-.js";import"./useEventCallback-eP2xfpVZ.js";import"./SkeletonBar-BOoh_hK9.js";import"./LoadingCell-DVXZLGmA.js";import"./ColumnConfigDialog-C74PQ5xm.js";import"./DraggableList-DKoTnVlC.js";import"./search-DStplL8v.js";import"./Input-BiPNpz_C.js";import"./useControlled-Ft9yJ31_.js";import"./Button-fOyW8XxT.js";import"./small-cross-DJff8L-H.js";import"./ActionButton-CnnTCenO.js";import"./Checkbox-CZm4gJDd.js";import"./useValueChanged-D_5yXDiE.js";import"./CollapsiblePanel-DOU8qtuA.js";import"./MultiColumnSortDialog-DWANlOyK.js";import"./MenuTrigger-91XlII8E.js";import"./CompositeItem-C0zU83Hu.js";import"./ToolbarRootContext-DqJWDTyy.js";import"./getDisabledMountTransitionStyles-YjHiHV9j.js";import"./getPseudoElementBounds-BLYD-n1h.js";import"./chevron-down-BDQkglqC.js";import"./index-RDlQB4dD.js";import"./error-BRCQmACx.js";import"./BaseCbacBanner-BvAKGDgp.js";import"./makeExternalStore-Cn0Nj4g1.js";import"./Tooltip-Dgp5uIQr.js";import"./isObject-uzU1Ylcp.js";import"./debounce-dJHnwnXb.js";import"./tick-BHxlRL9h.js";import"./DropdownField-C1a46o93.js";import"./isEqual-C9gdny9X.js";import"./_baseIsEqual-DRNRy5kD.js";import"./withOsdkMetrics-By-ZCu6K.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,fe={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const he=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,he as __namedExportsOrder,fe as default};
