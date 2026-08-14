import{j as i}from"./iframe-DUEuiXsv.js";import{O as p}from"./object-table-DwqejOUI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bq8efsmv.js";import"./preload-helper-Df6_8uD6.js";import"./Table-D1rmwA4c.js";import"./index-VBi3p1EG.js";import"./Dialog-CRCYXUXL.js";import"./cross-BHSnocIt.js";import"./svgIconContainer-fUfiooYh.js";import"./useBaseUiId-rUHLvqa0.js";import"./InternalBackdrop-BKw-qa39.js";import"./composite-BQlLpDbX.js";import"./index-DaaqgxZj.js";import"./index-BSBqPfD7.js";import"./index-BMX1J3aX.js";import"./useEventCallback-CKqvUveK.js";import"./SkeletonBar-BXO9jfRb.js";import"./LoadingCell-BFQbqchN.js";import"./ColumnConfigDialog-Bm7DS_h9.js";import"./DraggableList-DHvOxSWC.js";import"./search-CQkXJiT6.js";import"./Input-DJ0wEJn_.js";import"./useControlled-BNu8ROQV.js";import"./Button-CDlf2YlH.js";import"./small-cross-BIVwOlj8.js";import"./ActionButton-C0gIAKdy.js";import"./Checkbox-BWGAdML-.js";import"./useValueChanged-BaOiGEU-.js";import"./CollapsiblePanel-BP_6HlRq.js";import"./MultiColumnSortDialog-CLvYRvqp.js";import"./MenuTrigger-DgnR2Wms.js";import"./CompositeItem-Bx3c2X42.js";import"./ToolbarRootContext-D11W-0nl.js";import"./getDisabledMountTransitionStyles-BzC4jxKd.js";import"./getPseudoElementBounds-WZokc1Yz.js";import"./chevron-down-D3lkidTG.js";import"./index-CDpKmQsf.js";import"./error-DhHmTIvC.js";import"./BaseCbacBanner-DhziRTee.js";import"./makeExternalStore-LN7J9oHG.js";import"./Tooltip-jqlALrhF.js";import"./PopoverPopup-Bsnp6ds2.js";import"./debounce-B9jYhlwj.js";import"./useOsdkClient-ZL9fjVwz.js";import"./tick-D_exLUv-.js";import"./DropdownField-CG8i5Qlw.js";import"./isEqual-BbITlJwb.js";import"./withOsdkMetrics-CPHwq3ys.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
