import{j as i}from"./iframe-Cw1OzJXI.js";import{O as p}from"./object-table-BlvqIoek.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DC8-pkeb.js";import"./preload-helper-VRjhiqdY.js";import"./Table-DO7lkPbv.js";import"./index-AdREiO06.js";import"./Dialog-CbtyUsmU.js";import"./cross-ByiNeePx.js";import"./svgIconContainer-CJz7g1GO.js";import"./useBaseUiId-kN-BHrn3.js";import"./InternalBackdrop-CIdeallu.js";import"./composite-DRnZZr1P.js";import"./index-I5TpdhWE.js";import"./index-BeY0cXRG.js";import"./index-2hLGIw1B.js";import"./useEventCallback-uoKbu4Qz.js";import"./SkeletonBar-DgfxUmTQ.js";import"./LoadingCell-CG_NKa2D.js";import"./ColumnConfigDialog-BmMKxIMW.js";import"./DraggableList-BqQahWmY.js";import"./search-B4Tj6n8T.js";import"./Input-D9ScyRrt.js";import"./useControlled-VUUaWxro.js";import"./isEqual-euZqodRa.js";import"./isObject-aq3xhs3E.js";import"./Button-UoOH76gu.js";import"./ActionButton-B01RMwt0.js";import"./Checkbox-CyI65MON.js";import"./useValueChanged-D5y9aqHu.js";import"./CollapsiblePanel-sIQ6S6_y.js";import"./MultiColumnSortDialog-Buq6GvoR.js";import"./MenuTrigger-BG0EgYHE.js";import"./CompositeItem-Wo-fO6cE.js";import"./ToolbarRootContext-D1YXlWsx.js";import"./getDisabledMountTransitionStyles-Ga8q-nXB.js";import"./getPseudoElementBounds-G7cdBYEe.js";import"./chevron-down-BF3wpGep.js";import"./index-Br682WIl.js";import"./error-DCuGKUxC.js";import"./BaseCbacBanner-BgGnqnzz.js";import"./makeExternalStore-Cti64u7E.js";import"./Tooltip-DPCzxURL.js";import"./PopoverPopup-Y3is10A5.js";import"./toNumber-lmVKIlAb.js";import"./useOsdkClient-Dbtl-Pan.js";import"./tick-x37joSps.js";import"./DropdownField-DmLcWF-C.js";import"./withOsdkMetrics-uQ7KoVP0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
