import{j as i}from"./iframe-B3d6ZwH7.js";import{O as p}from"./object-table-DHY1G7-K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CevLlc3f.js";import"./preload-helper-BSBI65hL.js";import"./Table-EMbp9qdH.js";import"./index-Bij8j6CR.js";import"./Dialog-CMth_41-.js";import"./cross-BWneTCDr.js";import"./svgIconContainer-NJcm7Mm7.js";import"./useBaseUiId-C-tRhBps.js";import"./InternalBackdrop-MtcmWp1u.js";import"./composite-CtQhbIeo.js";import"./index-DtG__1M4.js";import"./index-Cq5tqX8Z.js";import"./index-BaAo3EAk.js";import"./useEventCallback-DHJr8SHC.js";import"./SkeletonBar-D-rn6Dfi.js";import"./LoadingCell-CW5g-UDB.js";import"./ColumnConfigDialog-BFQj8l3k.js";import"./DraggableList-DruqWd_M.js";import"./search-CAgN4ZC5.js";import"./Input-CsaNiGJD.js";import"./useControlled-D1Bg559p.js";import"./isEqual-BqptH2-7.js";import"./isObject-DLydvX67.js";import"./Button-B3hR3y0_.js";import"./ActionButton-Hr2tOkzN.js";import"./Checkbox-FgktjBXT.js";import"./useValueChanged-CVjEmZG9.js";import"./CollapsiblePanel-anJ0WyFl.js";import"./MultiColumnSortDialog-BTt4c4kR.js";import"./MenuTrigger-CMa-1yOV.js";import"./CompositeItem-DK8C0Auv.js";import"./ToolbarRootContext-DBcC0PM-.js";import"./getDisabledMountTransitionStyles-69HVwoW5.js";import"./getPseudoElementBounds-UhFrpM66.js";import"./chevron-down-B6cvH9xf.js";import"./index-C0kc6WcW.js";import"./error-C54s5z2j.js";import"./BaseCbacBanner-DuflPtV7.js";import"./makeExternalStore-BZfNFRrb.js";import"./Tooltip-YNGtfezR.js";import"./PopoverPopup-b_nrQR6B.js";import"./toNumber-DDtkQcvh.js";import"./useOsdkClient-DF-jB69e.js";import"./tick-uNBS6qe_.js";import"./DropdownField-Bll0nSYs.js";import"./withOsdkMetrics-__TOn-89.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
