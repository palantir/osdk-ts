import{j as i}from"./iframe-W9lZ6KB9.js";import{O as p}from"./object-table-EVBvwLH1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-9M49qgZN.js";import"./preload-helper-FRDH_-i6.js";import"./Table-BwylGEhj.js";import"./index-zvENON5K.js";import"./Dialog-B9eCYEci.js";import"./cross-BA2Nf7ni.js";import"./svgIconContainer-GBMBocam.js";import"./useBaseUiId-CM8bj9T3.js";import"./InternalBackdrop-CxePxxDd.js";import"./composite-Dds-kjO9.js";import"./index-Do1aQnY4.js";import"./index-CiBIb1Hm.js";import"./index-ChcUrjTS.js";import"./useEventCallback-D0v7edrX.js";import"./SkeletonBar-D_VpdDsY.js";import"./LoadingCell-DTNeNwbU.js";import"./ColumnConfigDialog-De6q3yEz.js";import"./DraggableList-DmrQs1J0.js";import"./search-DtUsUWlr.js";import"./Input-BE9q1hzT.js";import"./useControlled-BibYMAkB.js";import"./Button-Cgco6Fdx.js";import"./small-cross-C2YcwmE1.js";import"./ActionButton-D1zQD0P_.js";import"./Checkbox-DetNGzt5.js";import"./useValueChanged-CclPVhvR.js";import"./CollapsiblePanel-Cz6nNrqA.js";import"./MultiColumnSortDialog-zMiz0Q2L.js";import"./MenuTrigger-U49E4e1V.js";import"./CompositeItem-9LwIi5rO.js";import"./ToolbarRootContext-DwUbHsl_.js";import"./getDisabledMountTransitionStyles-DN13DrMz.js";import"./getPseudoElementBounds-DgIVsabS.js";import"./chevron-down-CPOSM9ve.js";import"./index-WuDXyzt9.js";import"./error-DJOARvPR.js";import"./BaseCbacBanner-DHDCpkMg.js";import"./makeExternalStore-Bh-hA2FN.js";import"./Tooltip-B0ah55oe.js";import"./PopoverPopup-BW5x1WJ1.js";import"./debounce-AKwKS-26.js";import"./useOsdkClient-CfTr_FGX.js";import"./tick-CTwnnC4O.js";import"./DropdownField-f_oplqdE.js";import"./isEqual-Bdk7YwEU.js";import"./withOsdkMetrics-BEDTYsPk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
