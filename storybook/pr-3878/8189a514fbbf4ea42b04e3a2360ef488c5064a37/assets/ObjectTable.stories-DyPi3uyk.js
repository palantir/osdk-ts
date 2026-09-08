import{j as i}from"./iframe-56aCtkcZ.js";import{O as p}from"./object-table-DY9jOMSL.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BzdhKxqT.js";import"./preload-helper-DP50sY1P.js";import"./Table-BD41Pu4l.js";import"./index-BM5nCcvA.js";import"./Dialog-C8sI_IUj.js";import"./cross-BkceNYXb.js";import"./svgIconContainer-Da40OoQe.js";import"./useBaseUiId-D82-BIAj.js";import"./InternalBackdrop-BWk9Mij_.js";import"./composite-Bol_PDWG.js";import"./index-WgXTqvYF.js";import"./index-2i5LUS2T.js";import"./index-6JhW2qtZ.js";import"./useEventCallback--SPa_rCD.js";import"./SkeletonBar-B6_sPXiY.js";import"./LoadingCell-9Bkob7fj.js";import"./ColumnConfigDialog-E8E7Cf-b.js";import"./DraggableList-BgkHsuk4.js";import"./search-Df5_6yBi.js";import"./Input-BUSfhI-b.js";import"./useControlled-BNAN5oeG.js";import"./Button-C0vE2bzb.js";import"./small-cross-BScMbdWS.js";import"./ActionButton-juMisa4o.js";import"./Checkbox-BQvICqoB.js";import"./useValueChanged-B9dcid5j.js";import"./CollapsiblePanel-BK9buE6t.js";import"./MultiColumnSortDialog-BHrG4DuP.js";import"./MenuTrigger-CYnmjXqd.js";import"./CompositeItem-CtIfORVC.js";import"./ToolbarRootContext-DWmT4M8t.js";import"./getDisabledMountTransitionStyles-C3g2m2GA.js";import"./getPseudoElementBounds-DhoqY1uL.js";import"./chevron-down--SGqA3gF.js";import"./index-BglOGw85.js";import"./error-t-pHJ0in.js";import"./BaseCbacBanner-FU9mX3LF.js";import"./makeExternalStore-C8LtB6Bq.js";import"./Tooltip-DPvc60vQ.js";import"./PopoverPopup-1nRwWEZN.js";import"./debounce-CmP_j_Q8.js";import"./useOsdkClient-jilUbAUE.js";import"./tick-BVwIBB0x.js";import"./DropdownField-3Ad7m87u.js";import"./isEqual-CeyZKxlT.js";import"./withOsdkMetrics-BQAZKQ7x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
