import{j as i}from"./iframe-CDX-NTfD.js";import{O as p}from"./object-table-_hz3q5Et.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-pDpC7Gbb.js";import"./preload-helper-CSvLju02.js";import"./Table-D5yx9evC.js";import"./index-D6xAz9PB.js";import"./Dialog-G0b2VcwQ.js";import"./cross-CUWzhEFb.js";import"./svgIconContainer-99TPvqBc.js";import"./useBaseUiId-CM3Yhx5P.js";import"./InternalBackdrop-DiaJjHCs.js";import"./composite-CpWLo2c3.js";import"./index-qkQ_SGyl.js";import"./index-DmFJgdYe.js";import"./index-B2Z1_nfV.js";import"./useEventCallback-Cd_Dk0li.js";import"./SkeletonBar-Dt_qbNYC.js";import"./LoadingCell-GRxU-9a2.js";import"./ColumnConfigDialog-Dnjip8-F.js";import"./DraggableList-Dj-x_Sxv.js";import"./search-DvrI77MS.js";import"./Input-Dz-cSGCu.js";import"./useControlled-CLUlXrHb.js";import"./Button-CscfG-hh.js";import"./small-cross-5qXULdiz.js";import"./ActionButton-bEISj8yJ.js";import"./Checkbox-De-raZKJ.js";import"./useValueChanged-CsNJxGB2.js";import"./CollapsiblePanel-OIYRVxIj.js";import"./MultiColumnSortDialog-DMiLKeyK.js";import"./MenuTrigger-CabmK2Fj.js";import"./CompositeItem-nsBHK6f-.js";import"./ToolbarRootContext-BX6M6ShK.js";import"./getDisabledMountTransitionStyles-DJOApo6o.js";import"./getPseudoElementBounds-Dfao8WFR.js";import"./chevron-down-r7sEOhf_.js";import"./index-DTEUSjqo.js";import"./error-BplB6VbP.js";import"./BaseCbacBanner-P7JgUlKM.js";import"./makeExternalStore-DXrOIATy.js";import"./Tooltip-BVBB5Hov.js";import"./PopoverPopup-BLtOX9gX.js";import"./debounce-D1B6swv0.js";import"./useOsdkClient-ZKN6ZGl4.js";import"./tick-BHhyW78u.js";import"./DropdownField-CQBpCIOv.js";import"./isEqual-BdXiBc78.js";import"./withOsdkMetrics-CUdmlJda.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
