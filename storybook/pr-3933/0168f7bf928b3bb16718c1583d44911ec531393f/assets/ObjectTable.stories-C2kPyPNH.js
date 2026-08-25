import{j as i}from"./iframe-DNmOe6lu.js";import{O as p}from"./object-table-DaUAFcHr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CvoBYoLh.js";import"./preload-helper-CzQBCnx5.js";import"./Table-pbu-eGdq.js";import"./index-caWHSjtR.js";import"./Dialog-DH72U-Bf.js";import"./cross-Uw_qOqoe.js";import"./svgIconContainer-BE7zSGaJ.js";import"./useBaseUiId-DGcVLjQ2.js";import"./InternalBackdrop-CrKwsNIv.js";import"./composite-B-F9Dc9d.js";import"./index-BWnubV6Z.js";import"./index-CZaZwMdZ.js";import"./index-DpG-lJ3k.js";import"./useEventCallback-BcEHKNRU.js";import"./SkeletonBar-DFBb6qr_.js";import"./LoadingCell-hs5DOMVg.js";import"./ColumnConfigDialog-Bc6AruhI.js";import"./DraggableList-Cfr7aUuo.js";import"./search-BEsKwVx4.js";import"./Input-Dp4jVADC.js";import"./useControlled-Csc64VP1.js";import"./Button-CWVQOzz8.js";import"./small-cross-CUQPuwfM.js";import"./ActionButton-CMFy62q7.js";import"./Checkbox-B73qEk4e.js";import"./useValueChanged-xPpoXUlu.js";import"./CollapsiblePanel-kG9qILQW.js";import"./MultiColumnSortDialog-BC-zJwW7.js";import"./MenuTrigger-DBtCEjfZ.js";import"./CompositeItem-D6pRYz6J.js";import"./ToolbarRootContext-CmvtQ4qG.js";import"./getDisabledMountTransitionStyles-DqR0kNGe.js";import"./getPseudoElementBounds-DEMCmsZt.js";import"./chevron-down-B8h_jYO6.js";import"./index-CP4rvvXE.js";import"./error-Wtx85rSt.js";import"./BaseCbacBanner-ndtjJ8Jt.js";import"./makeExternalStore-CyEm4-2W.js";import"./Tooltip-HO9Lnryd.js";import"./PopoverPopup-0lG9TMBf.js";import"./debounce-uutSfaQu.js";import"./useOsdkClient-D-Rf3tpC.js";import"./tick-DlnBurgl.js";import"./DropdownField-BiYwm9gw.js";import"./isEqual-D-JsaTyA.js";import"./withOsdkMetrics-yeBN-NI8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
