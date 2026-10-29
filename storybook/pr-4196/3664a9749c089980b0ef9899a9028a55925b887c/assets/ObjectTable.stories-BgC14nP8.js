import{j as i}from"./iframe-fQxG4Lg8.js";import{O as p}from"./object-table-BguurVj9.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-V3BAL833.js";import"./preload-helper-C3S-rczw.js";import"./Table-4QPD3ovk.js";import"./index-ltdpE_X9.js";import"./Dialog-CGuuKNT3.js";import"./cross-DCa3-fIn.js";import"./svgIconContainer-DiG6bowi.js";import"./useBaseUiId-BLPigAyn.js";import"./InternalBackdrop-Cf_yJEvo.js";import"./composite-DDCMOEB3.js";import"./index-BJBu7OXz.js";import"./index-B903ktB6.js";import"./index-B1XnrnSa.js";import"./useEventCallback-DIfP3h4k.js";import"./SkeletonBar-wwhzG1v0.js";import"./LoadingCell-DD1q-NbW.js";import"./ColumnConfigDialog-DNzpeOFX.js";import"./DraggableList-BoJNfPWY.js";import"./search-Cty6Jhmh.js";import"./Input-CaYmWuD7.js";import"./useControlled-DqDDQqjZ.js";import"./Button-BifFo4zB.js";import"./small-cross-DndD1mKm.js";import"./ActionButton-9_9jfXoV.js";import"./Checkbox-D1hhimLl.js";import"./useValueChanged-0fxI-YLf.js";import"./CollapsiblePanel-D6URl5lo.js";import"./MultiColumnSortDialog-Dn2xubWh.js";import"./MenuTrigger-nzj5vofY.js";import"./CompositeItem-DICXTkJC.js";import"./ToolbarRootContext-CBJvqLZU.js";import"./getDisabledMountTransitionStyles-BfSk2v82.js";import"./getPseudoElementBounds-DnfsNe5i.js";import"./chevron-down-C1z-grQd.js";import"./index-C-pt0ouP.js";import"./error-DITUlsDB.js";import"./BaseCbacBanner-Ce1kigDa.js";import"./makeExternalStore-bm_X3lw2.js";import"./Tooltip-DuEVyIet.js";import"./PopoverPopup-C4texbP0.js";import"./debounce-Dj_e_6kC.js";import"./useOsdkClient-BlaEh5Bi.js";import"./tick-aJ0nLTgk.js";import"./DropdownField-eogQl421.js";import"./isEqual-D15Ao0tl.js";import"./withOsdkMetrics-M9jqBL_m.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
