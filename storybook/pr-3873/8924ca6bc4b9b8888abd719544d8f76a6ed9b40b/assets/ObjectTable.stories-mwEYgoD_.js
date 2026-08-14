import{j as i}from"./iframe-CBrZfziz.js";import{O as p}from"./object-table-DgpN12v3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4of6tsG.js";import"./preload-helper-C1Z52epK.js";import"./Table-BY3aOI22.js";import"./index-Cg9PAsxv.js";import"./Dialog-BcMlSlrF.js";import"./cross-CUjJ-5wv.js";import"./svgIconContainer-Dyb3dMVr.js";import"./useBaseUiId-rohArgKw.js";import"./InternalBackdrop-V0CkF19D.js";import"./composite-DsbP76iG.js";import"./index-BelcqY8o.js";import"./index-1iEJy2Ov.js";import"./index-Bae-mW45.js";import"./useEventCallback-BuEcwQ1V.js";import"./SkeletonBar-DUf6Dhh7.js";import"./LoadingCell-BihYYLTD.js";import"./ColumnConfigDialog-CqdmK7O6.js";import"./DraggableList-x3hT5q1h.js";import"./search-D5OSZ-8x.js";import"./Input-Z9Dcl-3O.js";import"./useControlled-DGjbGIEp.js";import"./Button-C6PfnoAg.js";import"./small-cross-BgphLRoU.js";import"./ActionButton-B64bWJbY.js";import"./Checkbox-DBzE_Cg7.js";import"./useValueChanged-BZvjAs-H.js";import"./CollapsiblePanel-CYyA9miJ.js";import"./MultiColumnSortDialog-CBJDppMh.js";import"./MenuTrigger-BJKTh4zN.js";import"./CompositeItem-BfobZyII.js";import"./ToolbarRootContext-P5RW03dk.js";import"./getDisabledMountTransitionStyles-BBlvU2B3.js";import"./getPseudoElementBounds-BnGi5c6o.js";import"./chevron-down-DSLPvc9w.js";import"./index-TRV83l-e.js";import"./error-B-tgnml8.js";import"./BaseCbacBanner-BMjyNEmC.js";import"./makeExternalStore-B8Ya0P1z.js";import"./Tooltip-Cyp7zXRj.js";import"./PopoverPopup-BeaN5rrP.js";import"./debounce-Byylbass.js";import"./useOsdkClient-SkJ9fsFZ.js";import"./tick-Do95XvNo.js";import"./DropdownField-7P6q9HW6.js";import"./isEqual-CqekdwE9.js";import"./withOsdkMetrics-CdS06qS5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
