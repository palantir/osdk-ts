import{j as i}from"./iframe-CyC9Pk-h.js";import{O as p}from"./object-table-BsfP3FvY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ODt6fLXx.js";import"./preload-helper-Ba_eiWvD.js";import"./Table-DkLCx0er.js";import"./index-Jw1W-Dcz.js";import"./Dialog-Df0xEOMi.js";import"./cross-D41ZPA6o.js";import"./svgIconContainer-CtuyHuEk.js";import"./useBaseUiId-DA5rbGS_.js";import"./InternalBackdrop-CXPZKbfm.js";import"./composite-DqgZShC5.js";import"./index-DtMSFM7u.js";import"./index-1iTTRwMn.js";import"./index-EHC3aZTC.js";import"./useEventCallback-DSou20rM.js";import"./SkeletonBar-BnfsFDq0.js";import"./LoadingCell-C03pp2fP.js";import"./ColumnConfigDialog-CrbgZEFJ.js";import"./DraggableList-DS0clgRO.js";import"./search-CPABJXMR.js";import"./Input-5xKjP-wg.js";import"./useControlled-C3ihEHs7.js";import"./Button-CqFoA8aV.js";import"./small-cross-BMkUFw8K.js";import"./ActionButton-BVgOXFs6.js";import"./Checkbox-UV88qlOB.js";import"./useValueChanged-03JAa1pz.js";import"./CollapsiblePanel-C1I0lBEL.js";import"./MultiColumnSortDialog-y-WAtbmM.js";import"./MenuTrigger-DGnAtvUa.js";import"./CompositeItem-hsjBXfuI.js";import"./ToolbarRootContext-DTThoWLk.js";import"./getDisabledMountTransitionStyles-wUnEu5YD.js";import"./getPseudoElementBounds-BRBBxDWx.js";import"./chevron-down-CKdV8T0F.js";import"./index-L4eHIYb3.js";import"./error-C7KSTTAG.js";import"./BaseCbacBanner-Bv8g0L1w.js";import"./makeExternalStore-C4_agDxn.js";import"./Tooltip-LWsmRuja.js";import"./PopoverPopup-CE44CbNH.js";import"./debounce-CW6jMS9F.js";import"./useOsdkClient-OoJHmRAM.js";import"./tick-BJNw3IpF.js";import"./DropdownField-DxYekBT1.js";import"./isEqual-CqmkzJ1o.js";import"./withOsdkMetrics-BZTfI1Of.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
