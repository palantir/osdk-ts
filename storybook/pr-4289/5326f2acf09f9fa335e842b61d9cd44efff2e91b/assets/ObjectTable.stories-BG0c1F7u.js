import{j as i}from"./iframe-B4_7uhV2.js";import{O as p}from"./object-table-UEYeUjSy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrK9OguH.js";import"./preload-helper-Cw77NyEA.js";import"./Table-Cb9nM9r8.js";import"./index-Mdm4Vdz6.js";import"./Dialog-e7-brm2e.js";import"./cross-rrtuBbZ-.js";import"./svgIconContainer-CfsWQbiM.js";import"./useBaseUiId-jcj23Jre.js";import"./InternalBackdrop-D-j65lhL.js";import"./composite-DzB4ymUk.js";import"./index-BIAFdQmf.js";import"./index-tpsUjXJC.js";import"./index-C1Mq3mGJ.js";import"./useEventCallback-CyCSzUSB.js";import"./SkeletonBar-D706xdxV.js";import"./LoadingCell-M6mP6F3v.js";import"./ColumnConfigDialog-DQaZZWQt.js";import"./DraggableList-DXgJ1vEZ.js";import"./search-CkWTC5d3.js";import"./Input-D8cnvsnb.js";import"./useControlled-DuB2GZAM.js";import"./Button-Bp6QDAip.js";import"./small-cross-Bz0aCskk.js";import"./ActionButton-DjDw0tBC.js";import"./Checkbox-Dl3TjmaY.js";import"./useValueChanged-UlU1Gt2C.js";import"./CollapsiblePanel-B1l4B7kE.js";import"./MultiColumnSortDialog-C3IbAu0T.js";import"./MenuTrigger-gee-gl2y.js";import"./CompositeItem-CYgFQeQK.js";import"./ToolbarRootContext-By4aijuh.js";import"./getDisabledMountTransitionStyles-CGBLZLsV.js";import"./getPseudoElementBounds-D2XWYg3z.js";import"./chevron-down-DsD_ZS4y.js";import"./index-q1tL4Nc7.js";import"./error-CBs6A8KU.js";import"./BaseCbacBanner-B3k_08Ma.js";import"./makeExternalStore-D3O6kaQb.js";import"./Tooltip-Bvngz8iq.js";import"./PopoverPopup-DTvwoF1P.js";import"./debounce-X8d_TWmr.js";import"./useOsdkClient-GbTGK958.js";import"./tick-7a879WvW.js";import"./DropdownField-DTALq__z.js";import"./isEqual-ChU1peez.js";import"./withOsdkMetrics-DXLG4Ams.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
