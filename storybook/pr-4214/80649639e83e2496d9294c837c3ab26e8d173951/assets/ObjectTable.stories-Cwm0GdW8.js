import{j as i}from"./iframe-EQYHZGCW.js";import{O as p}from"./object-table-D9hNiE1B.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-dpyD1To0.js";import"./preload-helper-D0iBIgcV.js";import"./Table-Cf4en3W7.js";import"./index-DcRUH42g.js";import"./Dialog-D9xIFL2n.js";import"./cross-C8-00d-y.js";import"./svgIconContainer-D1wDh7_l.js";import"./useBaseUiId-B-jRpzmU.js";import"./InternalBackdrop-eYIHjnQ3.js";import"./composite-CIqX99J4.js";import"./index-CKjEOO1w.js";import"./index-CIgaZG3c.js";import"./index-D0Wo5FO3.js";import"./useEventCallback-BSME_xf2.js";import"./SkeletonBar-3kB07n5e.js";import"./LoadingCell-lCcSsnES.js";import"./ColumnConfigDialog-DXmrsezo.js";import"./DraggableList-BL7JJ4PT.js";import"./search-BVTqMz5e.js";import"./Input-C4K0OIlf.js";import"./useControlled-D8_Vw_1O.js";import"./Button-DiwOmMcV.js";import"./small-cross-CbxvG1Lp.js";import"./ActionButton-3hxbNss0.js";import"./Checkbox-ERk9uuCO.js";import"./useValueChanged-DhKLyqGQ.js";import"./CollapsiblePanel-BfN11z03.js";import"./MultiColumnSortDialog-Cze2u-4H.js";import"./MenuTrigger-CEzznRiL.js";import"./CompositeItem-Bzt8qu7P.js";import"./ToolbarRootContext-DFyHSe1V.js";import"./getDisabledMountTransitionStyles-DstXpz2X.js";import"./getPseudoElementBounds-B45YCg5U.js";import"./chevron-down-HP5bea9D.js";import"./index-DVNPKMaj.js";import"./error-Cd2sdUKV.js";import"./BaseCbacBanner-B4yymivw.js";import"./makeExternalStore-CxRQlBs2.js";import"./Tooltip-D1rS0CVa.js";import"./PopoverPopup-wEOR7HLL.js";import"./debounce-EHAoHJMy.js";import"./useOsdkClient-CuIzd9gl.js";import"./tick-DTY36Y1v.js";import"./DropdownField-Dyd5qMS9.js";import"./isEqual-D4DzFFxH.js";import"./withOsdkMetrics-Dwt30EQ7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
