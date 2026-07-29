import{j as i}from"./iframe-Da42tfo0.js";import{O as p}from"./object-table-btuI5mIo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DFdfIY3q.js";import"./preload-helper-DAikJXZa.js";import"./Table-BVmL8K-n.js";import"./index-Bomen_f9.js";import"./Dialog-n-frkQpt.js";import"./cross-DG6Fu1MX.js";import"./svgIconContainer-C1uFDFQ-.js";import"./useBaseUiId-BeAjw0Pz.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./index-Dneb3Ic8.js";import"./useEventCallback-DQIdBA5X.js";import"./SkeletonBar-BqNP19Zt.js";import"./LoadingCell-CTpBTWdO.js";import"./ColumnConfigDialog-CnzK0MCb.js";import"./DraggableList-DW5qQcgn.js";import"./search-CMGFB0Gl.js";import"./Input-CsGs3Ea-.js";import"./useControlled-tfkpEIEU.js";import"./isEqual-CldZjGbQ.js";import"./isObject-GrzurbJg.js";import"./Button-DNGlddJW.js";import"./ActionButton-BvqT7-oi.js";import"./Checkbox-DBtl7JMw.js";import"./useValueChanged-Cr9sCKBo.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./MultiColumnSortDialog-Dyqnc-DK.js";import"./MenuTrigger-DELKHcn5.js";import"./CompositeItem-BgwdEem5.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./chevron-down-B9ztHwbJ.js";import"./index-CUDqNzSs.js";import"./error-C20szSnY.js";import"./BaseCbacBanner-C-QMNaaF.js";import"./makeExternalStore-DY6l4t0Z.js";import"./Tooltip-s5Zvo8l1.js";import"./PopoverPopup-B2KF4r0_.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./tick-Djt3HCnR.js";import"./DropdownField-lD6ZutwA.js";import"./withOsdkMetrics-DcVf3U6k.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
