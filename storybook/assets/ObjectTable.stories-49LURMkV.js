import{j as i}from"./iframe-Cp41aqP7.js";import{O as p}from"./object-table-BcZ9MPkz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BZFkYVrk.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CKuEzbDa.js";import"./index-D0Tljy_b.js";import"./Dialog-iCGALKlw.js";import"./cross-Cbaea3iY.js";import"./svgIconContainer-DVVwszt5.js";import"./useBaseUiId-BVY_Ln8A.js";import"./InternalBackdrop-D515swvl.js";import"./composite-BsDaV1nn.js";import"./index-Dz9kJjLp.js";import"./index-BlcK1Y7H.js";import"./index-BdZhYyGK.js";import"./useEventCallback-DYvwbLkT.js";import"./SkeletonBar-Cv35Aff5.js";import"./LoadingCell-JLc5WJsI.js";import"./ColumnConfigDialog-DDXQ-bRC.js";import"./DraggableList-CUcMak9q.js";import"./search-DHgRsLWA.js";import"./Input-DOfJ9Smz.js";import"./useControlled-BMwYrgu0.js";import"./isEqual-9eKCG8lp.js";import"./isObject-PCeiLxkN.js";import"./Button-C-PrS_MA.js";import"./ActionButton-iDYjuM9T.js";import"./Checkbox-CQD_wAeN.js";import"./useValueChanged-DZwKs37h.js";import"./CollapsiblePanel-DaDqnvsn.js";import"./MultiColumnSortDialog-7r8ph8n9.js";import"./MenuTrigger-DTJFhZYP.js";import"./CompositeItem-DMNMCzbX.js";import"./ToolbarRootContext-glPgGB04.js";import"./getDisabledMountTransitionStyles-DL60Rntb.js";import"./getPseudoElementBounds-D5wcKlQ4.js";import"./chevron-down-BfKEa5Yk.js";import"./index-DfsF6fb0.js";import"./error-Do9MFOLD.js";import"./BaseCbacBanner-DMgWQPMh.js";import"./makeExternalStore-BUN0j2Qi.js";import"./Tooltip-hJT400YE.js";import"./PopoverPopup-DkUx5hSV.js";import"./toNumber-C9KlVl61.js";import"./useOsdkClient-DzbGNXpA.js";import"./tick-UqTH4Lh6.js";import"./DropdownField-D1Wn4cZN.js";import"./withOsdkMetrics-BeNDlcLW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
