import{j as i}from"./iframe-DEpmrtbG.js";import{O as p}from"./object-table-BJGCVnLx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-gdfnbrl6.js";import"./preload-helper-Bgg2uCW1.js";import"./Table-DMdwAM2N.js";import"./index-DgxVBE9v.js";import"./Dialog-BL-J1NYg.js";import"./cross-CrU6nGJP.js";import"./svgIconContainer-DWCXHbm6.js";import"./useBaseUiId-CETaC9GH.js";import"./InternalBackdrop-BJf2S27G.js";import"./composite-DBo_GtSD.js";import"./index-gBnbSOoM.js";import"./index-BsQx4f-z.js";import"./index-By9oDPdz.js";import"./useEventCallback-DWcDc9KV.js";import"./SkeletonBar-qEbRKPf1.js";import"./LoadingCell--WEN8DBK.js";import"./ColumnConfigDialog-Dph9Pt0O.js";import"./DraggableList-ce_8KGNq.js";import"./search-B4TawZLP.js";import"./Input-DnQqAjUi.js";import"./useControlled-CxIvThFp.js";import"./Button-C-DZ3Yzq.js";import"./small-cross-wFOvE6mp.js";import"./ActionButton-CmDGjkch.js";import"./Checkbox-BcwdHxHD.js";import"./useValueChanged-CVjECJ2T.js";import"./CollapsiblePanel-BCcZQ43x.js";import"./MultiColumnSortDialog-CKQGaall.js";import"./MenuTrigger-CApU9aj8.js";import"./CompositeItem-LCipfobg.js";import"./ToolbarRootContext-BN4SwV4N.js";import"./getDisabledMountTransitionStyles-hbhLeVH_.js";import"./getPseudoElementBounds-DeGavAO8.js";import"./chevron-down-Cvm0d31k.js";import"./index-Ddv81Ai4.js";import"./error-DVsFEdhY.js";import"./BaseCbacBanner--TlWJCKJ.js";import"./makeExternalStore-BaPAj8aa.js";import"./Tooltip-DFM3nmx3.js";import"./PopoverPopup-BCiIUJbQ.js";import"./debounce-BECAHL4g.js";import"./useOsdkClient-CRefb4Et.js";import"./tick-C59Dr2Db.js";import"./DropdownField-D0CE821u.js";import"./isEqual-Cz0QPFxe.js";import"./withOsdkMetrics-DnWSlC-3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
