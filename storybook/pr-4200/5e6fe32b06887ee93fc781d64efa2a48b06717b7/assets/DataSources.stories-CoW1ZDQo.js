import{j as r}from"./iframe-BIQDpA0w.js";import{O as b}from"./object-table-RXAbVnBZ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-Dw-ayemD.js";import{u as g}from"./useOsdkClient-CTsijBB9.js";import"./preload-helper-CAkujj7t.js";import"./Table-Ce68YxbR.js";import"./index-QJcQchwi.js";import"./Dialog-D3VIN7AC.js";import"./cross-BhokxWW9.js";import"./svgIconContainer-Beiwk1zG.js";import"./useBaseUiId-HWzj2ccw.js";import"./InternalBackdrop-DMwmGhme.js";import"./composite-DWMEotDY.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./index-BIXocC3w.js";import"./useEventCallback-BzVAB-mp.js";import"./SkeletonBar-B43s3nN1.js";import"./LoadingCell-DPwqXjlB.js";import"./ColumnConfigDialog-DxlsVkfp.js";import"./DraggableList-B4lvsNU6.js";import"./search-BU70SvPR.js";import"./Input-C1BIZDwN.js";import"./useControlled-JCzKMRhN.js";import"./Button-CwWS2Nno.js";import"./small-cross-CBUOmFXX.js";import"./ActionButton-DMzTeECz.js";import"./Checkbox-CTBZlszI.js";import"./useValueChanged-C1ElPd55.js";import"./CollapsiblePanel-DHXJGM_8.js";import"./MultiColumnSortDialog-DiKXAdpQ.js";import"./MenuTrigger-BCcyAoA5.js";import"./CompositeItem-k0wax-H2.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./getDisabledMountTransitionStyles-DLEuvAo9.js";import"./getPseudoElementBounds-DI-soIk4.js";import"./chevron-down-C5in3kf4.js";import"./index-FeoDYKMl.js";import"./error-D2lGBY9x.js";import"./BaseCbacBanner-TNEe3l7I.js";import"./makeExternalStore-DY4la4Jo.js";import"./Tooltip-DtFYkYWu.js";import"./PopoverPopup-CbUhKq8w.js";import"./debounce-1gOgvEv_.js";import"./tick-CECUkR10.js";import"./DropdownField-7skf6f3x.js";import"./isEqual-BO1Nngw8.js";import"./withOsdkMetrics-BMxdO0Ca.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
