import{j as i}from"./iframe-BEJEJisA.js";import{O as p}from"./object-table-jm4sFZ3T.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BRJqw9dl.js";import"./preload-helper-CTiopNJo.js";import"./Table-CUdKx4h7.js";import"./index-1N58UMzJ.js";import"./Dialog-BV1lMZPE.js";import"./cross-BjrVNHd5.js";import"./svgIconContainer-DsO6erGI.js";import"./useBaseUiId-Ew8LxSgO.js";import"./InternalBackdrop-DL9JbYUF.js";import"./composite-KwTbpSJb.js";import"./index-DCG3LK_H.js";import"./index-BMTQnMoQ.js";import"./index-B8J0Ow83.js";import"./useEventCallback-iVAQTX4_.js";import"./SkeletonBar-BhyVfmzi.js";import"./LoadingCell-mpz5oyrA.js";import"./ColumnConfigDialog-CmuQ8xtx.js";import"./DraggableList-ZC8q1xoS.js";import"./search-CrTCcvos.js";import"./Input-Dc1pIxfK.js";import"./useControlled-FA-c2Sau.js";import"./Button-BNegRBwl.js";import"./small-cross-DdmfQPNc.js";import"./ActionButton-2ogOV1x4.js";import"./Checkbox-DcD-s01f.js";import"./useValueChanged-acF7yMok.js";import"./CollapsiblePanel-DoZ_BIG5.js";import"./MultiColumnSortDialog-Qjze1ita.js";import"./MenuTrigger-f6q_Afz4.js";import"./CompositeItem-B4OpLzis.js";import"./ToolbarRootContext-NNa6yEkX.js";import"./getDisabledMountTransitionStyles-DfEIWT8z.js";import"./getPseudoElementBounds-BcQdcw-B.js";import"./chevron-down-USDozdCe.js";import"./index-BgY1n9at.js";import"./error-C4eZ36G4.js";import"./BaseCbacBanner-EAHHvgHQ.js";import"./makeExternalStore-DJsapvxx.js";import"./Tooltip-BgKnrnJ_.js";import"./PopoverPopup-Dj8W7Cn3.js";import"./debounce-r6XyHjgC.js";import"./useOsdkClient-Bpe-a7b_.js";import"./tick-BPxV61Pe.js";import"./DropdownField-ED9pk3ub.js";import"./isEqual-D8fQwqRZ.js";import"./withOsdkMetrics-Cs8owx7q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
