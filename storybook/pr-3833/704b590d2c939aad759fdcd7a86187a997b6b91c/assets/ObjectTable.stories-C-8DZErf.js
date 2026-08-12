import{j as i}from"./iframe-CE9D4JEg.js";import{O as p}from"./object-table-J6bL-P4e.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CovUKXQh.js";import"./preload-helper-DZkFqKXe.js";import"./Table-5jH2bIn9.js";import"./index-CqAb3zQU.js";import"./Dialog-CDgqCLwb.js";import"./cross-CEfizOG4.js";import"./svgIconContainer-CzB6UxLW.js";import"./useBaseUiId-By_k7w7S.js";import"./InternalBackdrop-BOutezVR.js";import"./composite-D8GuK9Lq.js";import"./index-C8x2Wal6.js";import"./index-TKpJPc24.js";import"./index-D4tIaWwP.js";import"./useEventCallback-B_j4s6Cv.js";import"./SkeletonBar-DS0akx8X.js";import"./LoadingCell-DkEjHWfP.js";import"./ColumnConfigDialog-BvKTDTH8.js";import"./DraggableList-DoEE1uR1.js";import"./search-Bd6q-htL.js";import"./Input-CP1qtpJz.js";import"./useControlled-3ExL0cgK.js";import"./isEqual-DhHPnCYC.js";import"./isObject-CvU8D3uq.js";import"./Button-C41nBApG.js";import"./ActionButton-DTiUKEcJ.js";import"./Checkbox-Df3pitEk.js";import"./useValueChanged-BS0Dmr34.js";import"./CollapsiblePanel-D1FzsCIw.js";import"./MultiColumnSortDialog-BtVN3bJQ.js";import"./MenuTrigger-D9NVy_PN.js";import"./CompositeItem-CbXGTBfN.js";import"./ToolbarRootContext-BEi2Iys0.js";import"./getDisabledMountTransitionStyles-DvxCzkJC.js";import"./getPseudoElementBounds-Dsw-FRYL.js";import"./chevron-down-C7EWI--r.js";import"./index-BrXNTpWP.js";import"./error-CQamlZ8D.js";import"./BaseCbacBanner-BTdzruE_.js";import"./makeExternalStore-Dl3CPFxJ.js";import"./Tooltip-BRZH-K7d.js";import"./PopoverPopup-Bo5NYsVr.js";import"./toNumber-pBmfXEHq.js";import"./useOsdkClient-Aujm3-Il.js";import"./tick-CvGUey2M.js";import"./DropdownField-GrpqsGo0.js";import"./withOsdkMetrics-CFMrDZ49.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
