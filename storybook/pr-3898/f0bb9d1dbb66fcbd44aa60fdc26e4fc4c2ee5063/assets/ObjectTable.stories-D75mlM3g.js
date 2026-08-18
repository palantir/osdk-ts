import{j as i}from"./iframe-BYRqOhSr.js";import{O as p}from"./object-table-C1zu1WDG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B4qysG9J.js";import"./preload-helper-DLGTrBKR.js";import"./Table-Dgu0q0Tw.js";import"./index-CSSebMeO.js";import"./Dialog-BholJzd6.js";import"./cross-Cdpkq547.js";import"./svgIconContainer-wW0CqYPP.js";import"./useBaseUiId-BFjTC6ra.js";import"./InternalBackdrop-DCg-_Sni.js";import"./composite-0rukfXMW.js";import"./index--Qkxp9Ch.js";import"./index-Crj6XLuG.js";import"./index-D9v2WBqW.js";import"./useEventCallback-D71ScrdE.js";import"./SkeletonBar-DvfqZoaT.js";import"./LoadingCell-Co7MMWAw.js";import"./ColumnConfigDialog-aTcyzx3L.js";import"./DraggableList-CtySVNWz.js";import"./search-DIpxBZ8i.js";import"./Input-DR73XI4T.js";import"./useControlled-BLCq1h60.js";import"./isEqual-3Z6cF9qG.js";import"./isObject-CcdWjjol.js";import"./Button-cKG_17Qb.js";import"./ActionButton-ExC3cibU.js";import"./Checkbox-CdERxcMz.js";import"./useValueChanged-C9z6EyUU.js";import"./CollapsiblePanel-AsX3Kr6W.js";import"./MultiColumnSortDialog-LB8bNOJz.js";import"./MenuTrigger-CYElN_HF.js";import"./CompositeItem-mcJO_U5b.js";import"./ToolbarRootContext-D6_V_hS-.js";import"./getDisabledMountTransitionStyles-v4JFZ5lq.js";import"./getPseudoElementBounds-DL5KJd8v.js";import"./chevron-down-DUmlt8XR.js";import"./index-CKEL1RmN.js";import"./error-DF1K1fTv.js";import"./BaseCbacBanner-BLUaN58l.js";import"./makeExternalStore-RjmvQ4XE.js";import"./Tooltip-CIIn7ppo.js";import"./PopoverPopup-LBvyw9jr.js";import"./toNumber-DsQD2KWL.js";import"./useOsdkClient-DTSr5eBl.js";import"./tick-DgN8qV2O.js";import"./DropdownField-DcXEiZFu.js";import"./withOsdkMetrics-BiRr5uSt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
