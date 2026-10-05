import{j as i}from"./iframe-D4hrQN2M.js";import{O as p}from"./object-table-eoyHm8rr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRhwe2qF.js";import"./preload-helper-sZ7GZnTp.js";import"./Table-C8TaCY1N.js";import"./index-TJFGWmSW.js";import"./Dialog-Cum9z4PZ.js";import"./cross-DpkqXaMH.js";import"./svgIconContainer-B2XpTIGD.js";import"./useBaseUiId-Dd8SLm5U.js";import"./InternalBackdrop-DTcgC7in.js";import"./composite-CR-Dz-Ek.js";import"./index-DLnqSt_k.js";import"./index-BRhC0vEw.js";import"./index-DxzPebG2.js";import"./useEventCallback-Bi7T9n7X.js";import"./SkeletonBar-D2ZrCjSS.js";import"./LoadingCell-Dov4RAGc.js";import"./ColumnConfigDialog-DpEbmIIs.js";import"./DraggableList-0U2j1jDu.js";import"./search-D1Xzl9P3.js";import"./Input-CkxkdCMO.js";import"./useControlled-D7NqC10F.js";import"./Button-C5ajAHO-.js";import"./small-cross-DZUN_pWg.js";import"./ActionButton-C2k80xY4.js";import"./Checkbox-DggoX4aS.js";import"./useValueChanged-kuV8QgZ2.js";import"./CollapsiblePanel-DZyDRhH1.js";import"./MultiColumnSortDialog-Q2eGzcIB.js";import"./MenuTrigger-__HBuUTm.js";import"./CompositeItem-D42qWJYi.js";import"./ToolbarRootContext-A7T_D51T.js";import"./getDisabledMountTransitionStyles-BQuC83a6.js";import"./getPseudoElementBounds-DbN1Aq9W.js";import"./chevron-down-CPNs7Pbe.js";import"./index-CFuoKysS.js";import"./error-DLpDeju-.js";import"./BaseCbacBanner-Jj2i97NM.js";import"./makeExternalStore-CT9_9BER.js";import"./Tooltip-BcRZGxaq.js";import"./PopoverPopup-CnVnN1Uy.js";import"./debounce-CAX0ITwT.js";import"./useOsdkClient-CRnyhdA3.js";import"./tick-BHTu8puw.js";import"./DropdownField-BMDSt0eR.js";import"./isEqual-BbQZa-Lk.js";import"./withOsdkMetrics-V-TF07Pc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
