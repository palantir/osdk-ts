import{j as i}from"./iframe-D_14QzXp.js";import{O as p}from"./object-table-BtmbLVpt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6J-c3Oz.js";import"./preload-helper-COqd9mn5.js";import"./Table-IAu-PnGJ.js";import"./index-dgvA8TZ9.js";import"./Dialog-BDUhGb5s.js";import"./cross-CugZ9ecx.js";import"./svgIconContainer-DLS8mbZw.js";import"./useBaseUiId-CG8eOpE9.js";import"./InternalBackdrop-BYhYbM2Q.js";import"./composite-DPicY4x_.js";import"./index-Df1oZaSN.js";import"./index-Ccw16ZEo.js";import"./index-DHYIK6M_.js";import"./useEventCallback-DVpXlI6n.js";import"./SkeletonBar-CWcGqnRh.js";import"./LoadingCell-DYsyGVFb.js";import"./ColumnConfigDialog-Cnvh6W73.js";import"./DraggableList-BJFxTU3e.js";import"./search-kgDQ-7P8.js";import"./Input-DorH3bhS.js";import"./useControlled-DcIpQ5so.js";import"./Button-emDgWZB-.js";import"./small-cross-65_SY4Sp.js";import"./ActionButton-sw6PFJQG.js";import"./Checkbox-B6c6b4Z_.js";import"./useValueChanged-CZIdWuf_.js";import"./CollapsiblePanel-Dti1PGZr.js";import"./MultiColumnSortDialog-BfsZdYZC.js";import"./MenuTrigger-BTjSaEik.js";import"./CompositeItem-CEQFfLmp.js";import"./ToolbarRootContext-q675nIs9.js";import"./getDisabledMountTransitionStyles-BCowyj6U.js";import"./getPseudoElementBounds-Cxr1AJsy.js";import"./chevron-down-0GDoiAFe.js";import"./index-DY8cgXE9.js";import"./error-3iJhsGJG.js";import"./BaseCbacBanner-CaUloZOx.js";import"./makeExternalStore-C2nXARRC.js";import"./Tooltip-BhEyvTdz.js";import"./PopoverPopup-Bl0qtEmP.js";import"./debounce-B9L9eTna.js";import"./useOsdkClient-8tDFdRkv.js";import"./tick-fofCPZ0i.js";import"./DropdownField-BNL5kW_g.js";import"./isEqual-Diit75gH.js";import"./withOsdkMetrics-CCrpbMke.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
