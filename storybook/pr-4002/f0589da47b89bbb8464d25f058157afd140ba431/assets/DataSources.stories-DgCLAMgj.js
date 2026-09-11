import{j as r}from"./iframe-CM-gF3vE.js";import{O as b}from"./object-table-C32GMorJ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-D_rL-Q-_.js";import{u as g}from"./useOsdkClient-BXUVBGsy.js";import"./preload-helper-6RfIl02U.js";import"./Table-QO4nURij.js";import"./index-DP8egC0k.js";import"./Dialog-DGgbpeLl.js";import"./cross-YK-JeFcC.js";import"./svgIconContainer-PHQsggTT.js";import"./useBaseUiId-CaS2-N7q.js";import"./InternalBackdrop-BWQN2r6E.js";import"./composite-Cf4jE4TY.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./index-JlgGEqsp.js";import"./useEventCallback-DWaD4meR.js";import"./SkeletonBar-BEl30Own.js";import"./LoadingCell-DJ4wUhY2.js";import"./ColumnConfigDialog-CSs7gAfE.js";import"./DraggableList-DzEByvv8.js";import"./search-BtBkQ6yC.js";import"./Input-DqavlJne.js";import"./useControlled-BG8DwFhU.js";import"./Button-BzK-RFmN.js";import"./small-cross-BR7O7PTe.js";import"./ActionButton-ESMROX5N.js";import"./Checkbox-pu8Dy_Nr.js";import"./useValueChanged-CM10G8md.js";import"./CollapsiblePanel-CMWBQRO_.js";import"./MultiColumnSortDialog-D7Rvpo7x.js";import"./MenuTrigger-B0ayLht6.js";import"./CompositeItem-D8NXSqvh.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./getDisabledMountTransitionStyles-CA_1r-E1.js";import"./getPseudoElementBounds-du8OB8QR.js";import"./chevron-down-w3gTlyQy.js";import"./index-C3eh3scJ.js";import"./error-2hF2x4c1.js";import"./BaseCbacBanner-ByAGatso.js";import"./makeExternalStore-BT0R62z7.js";import"./Tooltip-Bwp1W_ff.js";import"./PopoverPopup-Bq82sjKK.js";import"./debounce-BZ1j8w7d.js";import"./tick-Cz70wbcO.js";import"./DropdownField-DO17CDFv.js";import"./isEqual-tjQhxROU.js";import"./withOsdkMetrics-CARAYaYa.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
