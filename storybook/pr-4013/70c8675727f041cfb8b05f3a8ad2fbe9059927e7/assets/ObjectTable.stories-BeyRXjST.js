import{j as i}from"./iframe-CZqFYSvz.js";import{O as p}from"./object-table-DwMB5kVn.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BB0wYHoh.js";import"./preload-helper-W-9dgf5b.js";import"./Table-B3v6P-QS.js";import"./index-4I_FO6X-.js";import"./Dialog-ceRzZVUm.js";import"./cross-DwkOXENp.js";import"./svgIconContainer-B4GgTWLP.js";import"./useBaseUiId-D1DgvgDy.js";import"./InternalBackdrop-CqAf0JXm.js";import"./composite-DshpnDaY.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./index-DwIy-beY.js";import"./useEventCallback-C1QWqQSQ.js";import"./SkeletonBar-YNeerWRQ.js";import"./LoadingCell-J626_w_e.js";import"./ColumnConfigDialog-DhBY97p3.js";import"./DraggableList-DTGbsUyi.js";import"./search-DQIrKTJC.js";import"./Input-DFczC5qB.js";import"./useControlled-BEhUjoKU.js";import"./Button-DPWKZHun.js";import"./small-cross-DqYGaSrZ.js";import"./ActionButton-DwlulUX5.js";import"./Checkbox-CT4wGdV_.js";import"./useValueChanged-pQbly7Ct.js";import"./CollapsiblePanel-fJf7Arc3.js";import"./MultiColumnSortDialog-Daa1Ku64.js";import"./MenuTrigger-kTph8d-l.js";import"./CompositeItem-BX8AU06n.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./getDisabledMountTransitionStyles-BKCYmhLV.js";import"./getPseudoElementBounds-BXEncbQt.js";import"./chevron-down-DW5k5Yie.js";import"./index-CkQb-QUw.js";import"./error-B_2Afo6g.js";import"./BaseCbacBanner-MmXi3aHl.js";import"./makeExternalStore-BLCxm6Ol.js";import"./Tooltip-4cXVr-Gb.js";import"./PopoverPopup-NWTu8aE_.js";import"./debounce-iVB6b_Y1.js";import"./useOsdkClient-CH4uCo_W.js";import"./tick-CC6n50A4.js";import"./DropdownField-BI2c6Ebd.js";import"./isEqual-BAjQPonJ.js";import"./withOsdkMetrics-BHAZhm5k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
