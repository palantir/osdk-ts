import{j as i}from"./iframe-nukQkA9I.js";import{O as p}from"./object-table-K9D0nuN0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BdSS3Cz9.js";import"./preload-helper-SAYG1EIe.js";import"./Table-DKXqaPRr.js";import"./index-D-GlitYq.js";import"./Dialog-Dnpt6yRQ.js";import"./cross-AUKdXd6S.js";import"./svgIconContainer-BRLU7q7E.js";import"./useBaseUiId-DDz0NCTS.js";import"./InternalBackdrop-a-wOXysB.js";import"./composite-C4ibImfR.js";import"./index-C3FqsozF.js";import"./index-BNEnQN8B.js";import"./index-DB5tfdIB.js";import"./useEventCallback-D6wC1Sto.js";import"./SkeletonBar-Bo4glzOY.js";import"./LoadingCell-zTTgdgYS.js";import"./ColumnConfigDialog-Djcvk-p7.js";import"./DraggableList-DfxHwUAO.js";import"./search-DU9QOFIa.js";import"./Input-BpkcbvD3.js";import"./useControlled-CCaNPmgV.js";import"./Button-DH7_1I4V.js";import"./small-cross-Djgqv-i1.js";import"./ActionButton-CRB-SEkc.js";import"./Checkbox-DuAOV7nQ.js";import"./useValueChanged-ChdRJ_58.js";import"./CollapsiblePanel-Cjaojbm_.js";import"./MultiColumnSortDialog-RiPM62Ra.js";import"./MenuTrigger-eSY_j9xA.js";import"./CompositeItem-FfzK-6cQ.js";import"./ToolbarRootContext-fpQvlLhR.js";import"./getDisabledMountTransitionStyles-DDgFSqxd.js";import"./getPseudoElementBounds-m5PwG0QT.js";import"./chevron-down-A-s4tptO.js";import"./index-DHZErGjk.js";import"./error-Btym7AAe.js";import"./BaseCbacBanner-Cli9v28S.js";import"./makeExternalStore-BULRIBYo.js";import"./Tooltip-B7VRWvgf.js";import"./PopoverPopup-ZbVHJ-GH.js";import"./debounce-DVmJRHR5.js";import"./useOsdkClient-DiA-yxQE.js";import"./tick-y2AICyxl.js";import"./DropdownField-DOfjncwG.js";import"./isEqual-ANSE0uXE.js";import"./withOsdkMetrics--rpBEpu9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
