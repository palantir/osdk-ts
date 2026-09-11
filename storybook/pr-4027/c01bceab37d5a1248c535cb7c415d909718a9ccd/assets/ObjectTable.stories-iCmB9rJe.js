import{j as i}from"./iframe-C4E-g_Np.js";import{O as p}from"./object-table-BvZY8ks1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DB3PKhcM.js";import"./preload-helper-rW2p5jqX.js";import"./Table-DoTclkzj.js";import"./index-CzqkLMMI.js";import"./Dialog-oOfXzLLB.js";import"./cross-6-c7L2_r.js";import"./svgIconContainer-i3Vzui20.js";import"./useBaseUiId-B-PzIYIN.js";import"./InternalBackdrop-Cc3UyaVF.js";import"./composite-BnlE1__B.js";import"./index-D1JR9Ik6.js";import"./index-BMt0vC51.js";import"./index-1_U-6RN5.js";import"./useEventCallback-B_G8HNu3.js";import"./SkeletonBar-CISy7UuQ.js";import"./LoadingCell-q6GT9Knz.js";import"./ColumnConfigDialog-BxMAye25.js";import"./DraggableList-RigxtXGV.js";import"./search-CfqJuXpO.js";import"./Input-BPR-03z-.js";import"./useControlled-CQT-2p8e.js";import"./Button-kJtgGGYx.js";import"./small-cross-ClQmt7Kl.js";import"./ActionButton-CiCsL3Oo.js";import"./Checkbox-BES1SoPw.js";import"./useValueChanged-DvRoJUac.js";import"./CollapsiblePanel-DIugTpM9.js";import"./MultiColumnSortDialog-DbbTce7i.js";import"./MenuTrigger-NsQDuuGv.js";import"./CompositeItem-DpdLDIC_.js";import"./ToolbarRootContext-DAbASYAb.js";import"./getDisabledMountTransitionStyles-BXneaNn3.js";import"./getPseudoElementBounds-BqbtI_0K.js";import"./chevron-down-CUSU7y7B.js";import"./index-4qPHZMUz.js";import"./error-2WKWP45F.js";import"./BaseCbacBanner-DK52-1P-.js";import"./makeExternalStore-o-ytUCUX.js";import"./Tooltip-YL3zwoBF.js";import"./PopoverPopup-UNHpzLqe.js";import"./debounce-B9bCgoy4.js";import"./useOsdkClient-DuIbV6Tk.js";import"./tick-CrIHxN3X.js";import"./DropdownField-qBxkOplm.js";import"./isEqual-Z4P9dhR-.js";import"./withOsdkMetrics-IbzZIByL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
