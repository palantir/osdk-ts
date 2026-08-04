import{j as i}from"./iframe-BX6zTnij.js";import{O as p}from"./object-table-HjumBpwO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-OTAGILWL.js";import"./preload-helper-CIctYDkr.js";import"./Table-KIccUGPl.js";import"./index-COyl-fnK.js";import"./Dialog-BBd-3h2m.js";import"./cross-DQs-8X1Y.js";import"./svgIconContainer-YvrcWCz5.js";import"./useBaseUiId-Iiv9zSt_.js";import"./InternalBackdrop-DERl9nUU.js";import"./composite-tNjYOXwg.js";import"./index-BXMmQHN1.js";import"./index-BBTcolHi.js";import"./index-BdFJFz6A.js";import"./useEventCallback-CXC3bTZZ.js";import"./SkeletonBar-BMTNEQmY.js";import"./LoadingCell-BDOMyR8x.js";import"./ColumnConfigDialog-CMkoR81A.js";import"./DraggableList-Ch6VbW8H.js";import"./search-CxVBrsXo.js";import"./Input-CSzJ0VGU.js";import"./useControlled-BbWNiggX.js";import"./isEqual-BULHHzuo.js";import"./isObject-Byb1sDcd.js";import"./Button-pMsIGg4G.js";import"./ActionButton-BXtG9d8G.js";import"./Checkbox-BSQI_4Tj.js";import"./useValueChanged-BRwHer1l.js";import"./CollapsiblePanel-CsPYgs9H.js";import"./MultiColumnSortDialog-UvnfXN2R.js";import"./MenuTrigger-Ds4lY9vq.js";import"./CompositeItem-BFxojHmW.js";import"./ToolbarRootContext-BEqq6mNC.js";import"./getDisabledMountTransitionStyles-BvemoO_E.js";import"./getPseudoElementBounds-C4OutAm4.js";import"./chevron-down-CJR3WBq7.js";import"./index-BpLkgj3w.js";import"./error-DLJXEcMM.js";import"./BaseCbacBanner-D93tYNJp.js";import"./makeExternalStore-BWA0mUfB.js";import"./Tooltip-b5S0dA7I.js";import"./PopoverPopup-9P-V5GZQ.js";import"./toNumber-BGKkQbGY.js";import"./useOsdkClient-BTAusKbD.js";import"./tick-C9TCC1fg.js";import"./DropdownField-CRXzHbV6.js";import"./withOsdkMetrics-B5u35hN9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
