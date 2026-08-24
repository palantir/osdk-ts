import{j as i}from"./iframe-D7uYHMK5.js";import{O as p}from"./object-table-V3UCM2fv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cvk5saoh.js";import"./preload-helper-DiAZcfZm.js";import"./Table-DtMzJz3l.js";import"./index-BzC45Lga.js";import"./Dialog-Dva2zDK4.js";import"./cross-CD_5zqBE.js";import"./svgIconContainer-BznKxTlt.js";import"./useBaseUiId-Us591avB.js";import"./InternalBackdrop-BCzVBoy3.js";import"./composite-BcyVLOSD.js";import"./index-I4_6oK98.js";import"./index-Cjfc9eRI.js";import"./index-C8TJW-iD.js";import"./useEventCallback-cILH2oXo.js";import"./SkeletonBar-D-LRfS-M.js";import"./LoadingCell-21AE9QX4.js";import"./ColumnConfigDialog-K-9LCMyb.js";import"./DraggableList-DpVkgFNq.js";import"./search-DRrcfgZe.js";import"./Input-BabOhAfz.js";import"./useControlled-D3BSP16K.js";import"./Button-erxxrJMI.js";import"./small-cross-CRWB9qfi.js";import"./ActionButton-UcWGaKKs.js";import"./Checkbox-CtO4j5Lj.js";import"./useValueChanged-BdXhgOuv.js";import"./CollapsiblePanel-4QbvNyUk.js";import"./MultiColumnSortDialog-n9LPvjCu.js";import"./MenuTrigger-8U4VhxNl.js";import"./CompositeItem-DjaEdGcQ.js";import"./ToolbarRootContext-D0EWy9dk.js";import"./getDisabledMountTransitionStyles-BjeyX6Od.js";import"./getPseudoElementBounds-CoL9SufA.js";import"./chevron-down-BFTm3R8X.js";import"./index-BMEwLPMF.js";import"./error-DJXRLU5K.js";import"./BaseCbacBanner-B6bLhjoW.js";import"./makeExternalStore-DmFz2z1W.js";import"./Tooltip-vgfshVU2.js";import"./PopoverPopup-n-QszO91.js";import"./debounce-DmAwE0_8.js";import"./useOsdkClient-DZ4-w40f.js";import"./tick-C6rTYxk-.js";import"./DropdownField-7eRy7ajr.js";import"./isEqual-BeDN-3ha.js";import"./withOsdkMetrics-D9_ognri.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
