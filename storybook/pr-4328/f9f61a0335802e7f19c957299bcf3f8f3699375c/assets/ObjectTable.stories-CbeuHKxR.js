import{j as i}from"./iframe-BWanzCtz.js";import{O as p}from"./object-table-CwNOXM7e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BsWFVpug.js";import"./preload-helper-DAi-P9Ju.js";import"./Table-BV5-Gg4n.js";import"./index-Cay7iVqb.js";import"./Dialog-BLyGAnT7.js";import"./cross-BVvC7Zca.js";import"./svgIconContainer-DSaD-I6F.js";import"./useBaseUiId-C5dN58Q0.js";import"./InternalBackdrop-TV8p7nHD.js";import"./composite-BafjzlJM.js";import"./index-ChQ5JBSj.js";import"./index-Dt-Mk7jk.js";import"./index-D9z2WP2p.js";import"./useEventCallback-BWB9gGvg.js";import"./SkeletonBar-CYNtPgHh.js";import"./LoadingCell-CuqD0XAT.js";import"./ColumnConfigDialog-DzAHMAUr.js";import"./DraggableList-D1yn9G39.js";import"./search-DRygowk4.js";import"./Input-Bt15IjV-.js";import"./useControlled-OnnNsrqI.js";import"./Button-BAzXvXXK.js";import"./small-cross-CVFLscZG.js";import"./ActionButton-BVuwYTIs.js";import"./Checkbox-ZZCzmUtb.js";import"./useValueChanged-KxYyG3ZS.js";import"./CollapsiblePanel-BgKRL3mk.js";import"./MultiColumnSortDialog-5nGqdLgE.js";import"./MenuTrigger-SRJmVwA-.js";import"./CompositeItem-BcxNHfQK.js";import"./ToolbarRootContext-De0bccAd.js";import"./getDisabledMountTransitionStyles-CvKZ4Y_-.js";import"./getPseudoElementBounds-O3K5JmaN.js";import"./chevron-down-BeOHwgJN.js";import"./index-CqrxIVAp.js";import"./error-CdqtE7bq.js";import"./BaseCbacBanner-B4VASqii.js";import"./makeExternalStore-_zqsQAA7.js";import"./Tooltip-DLH2JBkg.js";import"./PopoverPopup-DgQdAKzP.js";import"./debounce-ChP0u6Gi.js";import"./useOsdkClient-CY0unRSX.js";import"./tick-BXFsjeh2.js";import"./DropdownField-ScfJ-83O.js";import"./isEqual-Dz8uBPxJ.js";import"./withOsdkMetrics-d8l__l47.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
