import{j as i}from"./iframe-BX_ZglJt.js";import{O as p}from"./object-table-BrfdoMYW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CwmAFs94.js";import"./preload-helper-DgkZQ_xq.js";import"./Table-D8_HSV8U.js";import"./index-Bc3Cl_41.js";import"./Dialog-Bu6-Kj-W.js";import"./cross-Bb6sq-qZ.js";import"./svgIconContainer-BXbbsTGb.js";import"./useBaseUiId-B1-OngoV.js";import"./InternalBackdrop-CVXRM7LX.js";import"./composite-zDdFGMPL.js";import"./index-f-SNNIDI.js";import"./index-DEXm8OLH.js";import"./index-Bymt254M.js";import"./useEventCallback-CY3efkIf.js";import"./SkeletonBar-OhTF8r69.js";import"./LoadingCell-jCSIzRv-.js";import"./ColumnConfigDialog-CVbQvdjb.js";import"./DraggableList-DYouQU8K.js";import"./search-fr7iJOod.js";import"./Input-Dhz0W6pJ.js";import"./useControlled-CJlGLYfk.js";import"./isEqual-CjhHFU-O.js";import"./isObject-DOPaAV0g.js";import"./Button-E6kiD0yr.js";import"./ActionButton-DOP9LOd9.js";import"./Checkbox-Blm_4ilg.js";import"./useValueChanged-D4-4-7b2.js";import"./CollapsiblePanel-BhOuAUWU.js";import"./MultiColumnSortDialog-Dzzs7tfF.js";import"./MenuTrigger-DoPJIVoM.js";import"./CompositeItem-nc6zMu_C.js";import"./ToolbarRootContext-DkSLh-9D.js";import"./getDisabledMountTransitionStyles-BysbxaoP.js";import"./getPseudoElementBounds-BPL1ZlaK.js";import"./chevron-down-Enjce5n9.js";import"./index-CEWEVwT2.js";import"./error-aw4kUWZA.js";import"./BaseCbacBanner-2hGgw6l3.js";import"./makeExternalStore-BMycxTdB.js";import"./Tooltip-DalQkWyU.js";import"./PopoverPopup-BsXM6vRc.js";import"./toNumber-DE4wMns7.js";import"./useOsdkClient-Duhffiqv.js";import"./tick-Dnu4AhpX.js";import"./DropdownField-DfSuo6wk.js";import"./withOsdkMetrics-CwOfdRmG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
