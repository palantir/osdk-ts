import{j as i}from"./iframe-CzOIzVud.js";import{O as p}from"./object-table-BiaV50TY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CNnoFntD.js";import"./preload-helper-CwMKM08Q.js";import"./Table-C1slSHqd.js";import"./index-CTmIGBdU.js";import"./Dialog-DDNGSzjz.js";import"./cross-ChoO-hHZ.js";import"./svgIconContainer-0bhWATaq.js";import"./useBaseUiId-PA6AbvCv.js";import"./InternalBackdrop-8vONEObA.js";import"./composite-CCnWWb1N.js";import"./index-CYHilSIV.js";import"./index-OcnJrvDb.js";import"./index-CeqpJRDR.js";import"./useEventCallback-e2owZAXd.js";import"./SkeletonBar-BM-didmo.js";import"./LoadingCell-GADOyGu6.js";import"./ColumnConfigDialog-DTctQD0N.js";import"./DraggableList-BRQYiX0W.js";import"./search-OylK7gf9.js";import"./Input-C7TpWAR_.js";import"./useControlled-Bl4FNa4w.js";import"./Button-PAMPzLp5.js";import"./small-cross-Cev--Ndg.js";import"./ActionButton-BhhEiGs3.js";import"./Checkbox-C-AKjDp-.js";import"./useValueChanged-DAu4NU-7.js";import"./CollapsiblePanel-Cfd_4ZcG.js";import"./MultiColumnSortDialog-Cgs8kePe.js";import"./MenuTrigger-BflBD4VN.js";import"./CompositeItem-A6EkfQUI.js";import"./ToolbarRootContext-CMaoaTCy.js";import"./getDisabledMountTransitionStyles-Dii4bpI2.js";import"./getPseudoElementBounds-B02vA_g5.js";import"./chevron-down-Cb1symQ7.js";import"./index-BFY6m5n5.js";import"./error-bNK0ajAf.js";import"./BaseCbacBanner-X2T3Xpv6.js";import"./makeExternalStore-BLR6RjGC.js";import"./Tooltip-DObflQ9W.js";import"./PopoverPopup-lEB4hKfS.js";import"./debounce-C1RT7wUt.js";import"./useOsdkClient-Cfr0VwOI.js";import"./tick-sKwgcsDW.js";import"./DropdownField-CImlhZV3.js";import"./isEqual-C17Xnhpn.js";import"./withOsdkMetrics-C2KUxQ8x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
