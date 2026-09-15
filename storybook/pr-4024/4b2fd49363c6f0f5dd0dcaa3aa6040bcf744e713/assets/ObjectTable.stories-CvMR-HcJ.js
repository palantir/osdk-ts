import{j as i}from"./iframe-BhKMX8Fx.js";import{O as p}from"./object-table-BbGAztGy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgnvE-xz.js";import"./preload-helper-CZy_0jgg.js";import"./Table-rC_PCiVc.js";import"./index-DyXRR_oe.js";import"./Dialog-LwmqZ--E.js";import"./cross-Cg-ZPVlB.js";import"./svgIconContainer-Dqg69n5p.js";import"./useBaseUiId-B9dth6ze.js";import"./InternalBackdrop-BS1tlxHN.js";import"./composite-CveWDbYe.js";import"./index-BvAdv-zV.js";import"./index-C8--fwDy.js";import"./index-DE7CeQ9V.js";import"./useEventCallback-C9nVCC2I.js";import"./SkeletonBar-Kk12plMz.js";import"./LoadingCell-BNwqEIy0.js";import"./ColumnConfigDialog-XiyJeGoz.js";import"./DraggableList-BnUTNsfm.js";import"./search-BJB8jL9m.js";import"./Input-qedQc-sF.js";import"./useControlled-D7ZrYDZP.js";import"./Button-XEWUMbMz.js";import"./small-cross-CG13Z6HZ.js";import"./ActionButton-B1IiXgFb.js";import"./Checkbox-CXzE7Fij.js";import"./useValueChanged-Eluq5fvP.js";import"./CollapsiblePanel-BZGbmPQ9.js";import"./MultiColumnSortDialog-C3wMDocw.js";import"./MenuTrigger-5qdkchvr.js";import"./CompositeItem-CaT0iTXd.js";import"./ToolbarRootContext-CjkyXnS-.js";import"./getDisabledMountTransitionStyles-JqiqpVqP.js";import"./getPseudoElementBounds-ChNg3QuF.js";import"./chevron-down-B_4JujMO.js";import"./index-C-yRIYxo.js";import"./error-BDttauQc.js";import"./BaseCbacBanner-BO0Gh_zS.js";import"./makeExternalStore-ChUKIeN-.js";import"./Tooltip-DxrxksXr.js";import"./PopoverPopup-DGMdDGjG.js";import"./debounce-CzfTDtAQ.js";import"./useOsdkClient-ZpvYWodJ.js";import"./tick-C_DOXN-b.js";import"./DropdownField-BeMP89sC.js";import"./isEqual-DJe3rn5X.js";import"./withOsdkMetrics-Bm1ct0GQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
