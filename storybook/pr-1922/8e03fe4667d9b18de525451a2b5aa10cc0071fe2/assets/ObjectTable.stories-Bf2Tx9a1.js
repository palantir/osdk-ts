import{j as i}from"./iframe-CX9YXgSA.js";import{O as p}from"./object-table-Dfe_mZa3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BysoyG-b.js";import"./preload-helper-DtqkPlr3.js";import"./Table-DbkXRP8Q.js";import"./index-CHu8oj4z.js";import"./Dialog-AtSf_t3F.js";import"./cross-RF9BS1x-.js";import"./svgIconContainer-B6cy_VMV.js";import"./useBaseUiId-CCOn5SM4.js";import"./InternalBackdrop-BepV41uE.js";import"./composite-Buss17U8.js";import"./index-I5XF2J3w.js";import"./index-CU1lbmk7.js";import"./index-DqtGTCxT.js";import"./useEventCallback-foM6gK6J.js";import"./SkeletonBar-O2sp2JAt.js";import"./LoadingCell-BuGHfb6w.js";import"./ColumnConfigDialog-zhw3nOoj.js";import"./DraggableList-DjqACkCb.js";import"./search-N9rV3LuD.js";import"./Input-Cz4ERfsw.js";import"./useControlled-DmxCQxaW.js";import"./Button-CXKnl_XI.js";import"./small-cross-B9xThdJa.js";import"./ActionButton-DE-sYlp6.js";import"./Checkbox-CElMUeCU.js";import"./useValueChanged-BlgjX7r-.js";import"./CollapsiblePanel-BNaRB7Gp.js";import"./MultiColumnSortDialog-Bn1UaEGz.js";import"./MenuTrigger-C3Fnwbf1.js";import"./CompositeItem-4eZutR_U.js";import"./ToolbarRootContext-oh9KPlPl.js";import"./getDisabledMountTransitionStyles-CaxJBU-f.js";import"./getPseudoElementBounds-tIu6DOku.js";import"./chevron-down-Dc86wWzz.js";import"./index-DLNO2YQ4.js";import"./error-D_HPKerG.js";import"./BaseCbacBanner-j0epf_D2.js";import"./makeExternalStore-BTzOXgaO.js";import"./Tooltip-BxJhAj2y.js";import"./PopoverPopup-CV-lyuv2.js";import"./debounce-jRrecCNv.js";import"./useOsdkClient-DpMK-LnF.js";import"./tick-DKFgC3oF.js";import"./DropdownField-94zOpfvL.js";import"./isEqual-CEsABR2S.js";import"./withOsdkMetrics-DLY6T-R6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
